import { AnimeListResponse } from "@/interfaces/animeListResponse";

export const getAnimeList = async (sizeLimit:number):Promise<AnimeListResponse []>=>{ 
    try{
      const apiResponse = await fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=${sizeLimit}&sortBy=ranking&sortOrder=asc`,
      {
       method:'GET',
       headers:{
        'X-RapidAPI-Key': 'a28e09241emshc3367ca6817c8c9p11759bjsn861e18931a20',
		    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
       },
       
      }
      ).then(response => response.json());
    
      const animeList:AnimeListResponse [] = apiResponse.data
      return animeList;

    }
    catch(err){
     console.log(err);
     return []
    }
}