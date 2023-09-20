import { Anime } from "@prisma/client";


export const getAnimes = async ():Promise<Anime []> => {
 
   const animes = await fetch(`${process.env.BASE_URL}/api/anime`)
   .then(resp => resp.json());
   return animes.animes;
}