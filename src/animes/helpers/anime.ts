import { Anime } from "@prisma/client";

export const getAnimes = async ():Promise<Anime []> => {
 
   const animes = await fetch(`${process.env.BASE_URL}/api/anime`,{ cache: 'no-store' })
   .then(resp => resp.json())
   .catch(error => {throw new Error('Error at fetching Animes.')})
   return animes.animes;
}

export const deleteAnime = async (id:string):Promise<void> =>{
   await fetch(`http://localhost:3000/api/anime/${id}`,{
   method:'DELETE',
   headers:{
    'Content-type':'application/json'
   }})
   .then(resp => console.log(resp.json()));
}

