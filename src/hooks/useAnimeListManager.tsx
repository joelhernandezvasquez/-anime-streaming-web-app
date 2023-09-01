import { FavoriteAnimeList } from "@/interfaces/favoriteAnimeList";
import { useAppSelector,useAppDispatch } from "@/store";
import { addAnime, removeAnime } from "@/store/anime/animeSlice";


const useAnimeListManager = () => {

  const favoriteAnimeList = useAppSelector(state => state.anime.favoritesAnime);
  const dispatch = useAppDispatch();

  const addAnimeToList = (anime:FavoriteAnimeList) =>{
    dispatch(addAnime(anime));
  }

  const removeAnimeFromList = (animeId:string) =>{
    dispatch(removeAnime(animeId));
  }

  const isAnimeStored = (animeId:string) =>{
   return favoriteAnimeList.some((anime)=> anime._id === animeId);
  }
  
  return {
   isAnimeStored,
   addAnimeToList,
   removeAnimeFromList
  }
}

export default useAnimeListManager