import { createAnime, deleteAnime, getAnime } from "@/animes/helpers/anime";
import { FavoriteAnimeList } from "@/interfaces/favoriteAnimeList";
import { useAppSelector,useAppDispatch } from "@/store";
import { addAnime, removeAnime } from "@/store/anime/animeSlice";
import { Anime } from "@prisma/client";


const useAnimeListManager = () => {

  // const favoriteAnimeList = useAppSelector(state => state.anime.favoritesAnime);
  // const dispatch = useAppDispatch();

  const addAnimeToList = async (anime:Anime) =>{
    await createAnime(anime);
    //dispatch(addAnime(anime));
  }

  const removeAnimeFromList = async (animeId:string) =>{
    await deleteAnime(animeId);
   // dispatch(removeAnime(animeId));
  }

  const isAnimeStored = async (animeId:string) =>{
    const result = await getAnime(animeId);
    console.log(result);
    return result;
   //return favoriteAnimeList.some((anime)=> anime._id === animeId);
  }
  
  return {
   isAnimeStored,
   addAnimeToList,
   removeAnimeFromList
  }
}

export default useAnimeListManager