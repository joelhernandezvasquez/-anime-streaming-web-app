import { AnimeListResponse } from "@/interfaces/animeListResponse";

const apiHeader = {
  method:'GET',
  headers:{
    'X-RapidAPI-Key': 'a28e09241emshc3367ca6817c8c9p11759bjsn861e18931a20',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
   }
}

export const getAnimeList = async (sizeLimit:number):Promise<AnimeListResponse []>=>{ 
    try{
      const apiResponse = await fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=${sizeLimit}&sortBy=ranking&sortOrder=asc`,apiHeader)
      .then(response => response.json());
    
      const animeList:AnimeListResponse [] = apiResponse.data
      return animeList;

    }
    catch(err){
     console.log(err);
     return []
    }
}

export const getAnimeById = async (id:string):Promise<AnimeListResponse> => {
  try{
    const anime:AnimeListResponse = await fetch(`https://anime-db.p.rapidapi.com/anime/by-id/${id}`,apiHeader)
    .then(response => response.json())
   
    return anime;
  }
  catch(err){
    console.log(err)
    return {}
    // return { error: 'An error occurred while fetching the anime data.' };
  }
}

export const getAnimeBySearch = async (anime:string) =>{
  try{
    const animeResult = await fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=1&search=${anime}&sortBy=ranking&sortOrder=asc`,apiHeader)
    .then(response => response.json());
    return animeResult.data[0];
  }
  catch(err){
    console.log(err);
  }
}

