import { Metadata } from "next/types";
import Image from "next/image";
import { getAnimeById } from "@/services";
import AnimeRatingStars from "@/components/AnimeRatingStars/AnimeRatingStars";
import { IoBookmarkOutline } from "react-icons/io5";
import style from './anime.module.css';

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
      <div className={style.anime_main_container}>
      <h1>{animeData.title}</h1>
      <p className={style.anime_status}> Status: <span className={style.anime_status_description}>{animeData.status}</span> </p>
       
       <div className={style.anime_flex_row}>
        <AnimeRatingStars
         count={5}
         color={'#fff'}
         size={24}
         gap={8}
        />
        <div className={style.anime_divider}></div>
        <span className={style.anime_episodes}>{animeData.episodes} Episodes</span>
       </div>

       <button className={style.add_anime_list_btn}>
        <IoBookmarkOutline size={30}/>
         Add to anime list
       </button>

       <p className={style.anime_sypnopsis}>
        {animeData.synopsis}
       </p>
       
       <ul className={style.anime_genres_container}>
       {animeData.genres.map((genres,index)=>{
        return <li key={index}>{genres}</li>
       })}
       </ul>
       
      </div>  
    </section>
  )
}

export default AnimePage