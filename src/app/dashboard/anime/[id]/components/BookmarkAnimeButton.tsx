'use client';

import { useAppDispatch } from "@/store";
import { addAnime } from "@/store/anime/animeSlice";
import { FavoriteAnimeList } from "@/interfaces/favoriteAnimeList";
import { IoBookmarkOutline } from "react-icons/io5";
import style from '../anime.module.css';


interface Props{
    anime:FavoriteAnimeList
}

const BookmarkAnimeButton = ({anime}:Props) => {
    const {_id,title,thumb,episodes,status} = anime;
    const dispatch = useAppDispatch();

    const handleBookmarkAnime = () =>{
        dispatch(addAnime({_id,title,thumb,episodes,status}))
    }

  return (
    <button className={style.add_anime_list_btn} onClick={handleBookmarkAnime}>
        <IoBookmarkOutline size={30}/>
         Add to anime list
    </button>
  )
}

export default BookmarkAnimeButton;