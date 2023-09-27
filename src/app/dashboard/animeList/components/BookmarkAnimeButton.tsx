'use client';

import {useState} from 'react';
import { Anime } from '@prisma/client';
import useAnimeListManager from '@/hooks/useAnimeListManager';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';
import style from '../animeList.module.css';

interface Props{
    buttonText?:string,
    isStored:boolean
    anime: Anime
}

const BookmarkAnimeButton = ({buttonText,isStored,anime}:Props) => {
 const {removeAnimeFromList,addAnimeToList} = useAnimeListManager();
 const [isBookmarked,setBookmarked] = useState(isStored);
  
 const onToggleBookmarkedAnime= async () =>{
   setBookmarked(!isBookmarked);
  
   if(isBookmarked){
     await removeAnimeFromList(anime.id);
   }
    else{
      await addAnimeToList(anime);
    }
  
  }
  return (
    <>
     {isBookmarked ?
      <IoBookmark className={style.anime_card_icon_actions} onClick={onToggleBookmarkedAnime} size={25}/> 
      :<IoBookmarkOutline className={style.anime_card_icon_actions} onClick={onToggleBookmarkedAnime} size={25}/>}
      <span>{buttonText}</span>
    </>
     
  )
}

export default BookmarkAnimeButton;