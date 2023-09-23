import { AnimePost } from "@/types/AnimePost";
import { Anime } from "@prisma/client";

export const getAnimes = async ():Promise<Anime []> => {
 
   const animes = await fetch(`${process.env.BASE_URL}/api/anime`,{ cache: 'no-store' })
   .then(resp => resp.json())
   .catch(error => {throw new Error('Error at fetching Animes.')})
   return animes.animes;
}

export const getAnime = async (id:string):Promise<boolean> => {
 
   const isStored = await fetch(`http://localhost:3000/api/anime/${id}`,{ cache: 'no-store' })
   .then(resp => resp.json())
   .catch(error => {throw new Error('Error at fetching Animes.')})
   return isStored;
}



export const deleteAnime = async (id:string):Promise<void> =>{
   await fetch(`http://localhost:3000/api/anime/${id}`,{
   method:'DELETE',
   headers:{
    'Content-type':'application/json'
   }})
   .then(resp => console.log(resp.json()));
}

export const createAnime = async (anime:Anime):Promise<void> =>{
  const animeCreated = await fetch('http://localhost:3000/api/anime',{
   method:'POST',
   body:JSON.stringify(anime),
   headers:{
      'Content-type':'application/json'
     }
  }).then(response => response.json());
  console.log(animeCreated);
  
}

