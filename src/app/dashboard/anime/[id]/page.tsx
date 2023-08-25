import { Metadata } from "next/types";
import Image from "next/image";
import { getAnimeById } from "@/services";
import style from './anime.module.css';
import AnimeRatingStars from "@/components/AnimeRatingStars/AnimeRatingStars";
import { IoBookmarkOutline } from "react-icons/io5";

interface Props{
    params:{id:string}
}

export async function generateMetadata({params}:Props):Promise<Metadata>{

    try{
      const anime = await getAnimeById(params.id);
  
      return{
       title:`${ anime.title}`,
       description:`Page of ${ anime.title }`
      }
    }
  
    catch(err){
      return{
        title:`page of Anime`,
        description:`description of anime`
       }
    }
    
  }

const AnimePage =  async ({params}:Props) => {
  
    const animeData = await getAnimeById(params.id);
    return (
    <section>
        <Image
        className={style.anime_hero_img}
        width={500}
        height={400}
        src={animeData.image}
        alt={`image of ${animeData.title}`}
        />

       <h1>{animeData.title}</h1>
       <p>{animeData.status}</p>
       
       <div>
        <AnimeRatingStars
         count={5}
         color={'#FEC700'}
         size={20}
         gap={8}
        />
        <span>|</span>
        <span>{animeData.episodes}</span>
       </div>

       <button>
        <IoBookmarkOutline/>
         Add to anime list
       </button>

       <p>
        {animeData.synopsis}
       </p>
       {animeData.genres.map((genres,index)=>{
        return <p key={index}>{genres}</p>
       })}
       
      
        {/* {JSON.stringify(animeData)} */}
    </section>
  )
}

export default AnimePage