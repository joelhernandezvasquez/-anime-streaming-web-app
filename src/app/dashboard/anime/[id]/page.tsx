import { Metadata } from "next/types";
import Image from "next/image";
import { getAnimeById } from "@/services";


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
        title:`Pagina de el pokemon`,
        description:`description del pokemon`
       }
    }
    
  }

const AnimePage =  async ({params}:Props) => {
  
    const animeData = await getAnimeById(params.id);
   
    return (
    <section>
        <Image
        width={500}
        height={400}
        style={{
            width: '100%',
            height: '300px',
            objectFit:'cover',
            objectPosition:'50% 50%'
          }}
        src={animeData.image}
        alt={`image of ${animeData.title}`}
        />
      
        {/* {JSON.stringify(animeData)} */}
    </section>
  )
}

export default AnimePage