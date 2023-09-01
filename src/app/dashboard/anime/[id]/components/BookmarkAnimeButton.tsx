'use client';

import useAnimeListManager from "@/hooks/useAnimeListManager";
import { FavoriteAnimeList } from "@/interfaces/favoriteAnimeList";
import { IoBookmarkOutline,IoBookmark } from "react-icons/io5";
import style from '../anime.module.css';

interface Props{
    anime:FavoriteAnimeList
}

const BookmarkAnimeButton = ({anime}:Props) => {
   const {isAnimeStored,removeAnimeFromList,addAnimeToList} = useAnimeListManager();
    const {_id} = anime;
  
    return (
    <>
    {
        !isAnimeStored(_id)
        
        ?  (<button className={style.add_anime_list_btn} onClick={()=>addAnimeToList(anime)}>
           <IoBookmarkOutline size={30}/>
            Add to anime list 
           </button>
           )
        :
        
        (<button className={style.add_anime_list_btn} onClick={()=>removeAnimeFromList(_id)}>
           <IoBookmark size={30}/>
            In Anime List 
          </button>
        )
    }
    
    </>
   
  )
}

export default BookmarkAnimeButton;