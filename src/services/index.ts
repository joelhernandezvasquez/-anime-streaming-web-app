import { AnimeListResponse } from "@/interfaces/animeListResponse";


export const getAnimeList = async (sizeLimit:number):Promise<AnimeListResponse []>=>{ 
    try{
      const animeList:AnimeListResponse = await fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=${sizeLimit}&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc`,
      {
       method:'GET',
       headers:{
        'X-RapidAPI-Key': 'a28e09241emshc3367ca6817c8c9p11759bjsn861e18931a20',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
       }
      }
      ).then(response => response.json());

      return animeList.data;
    }
    catch(err){
     console.log(err);
     return []
    }
}