'use client';

import { ReactNode } from 'react';
import { Anime } from '@prisma/client';
import { useRouter } from 'next/navigation';
import useAnimeListManager from '@/hooks/useAnimeListManager';
interface Props{
    icon:ReactNode,
    buttonText?:string,
    isStored:boolean
    anime: Anime,
    style?:string
}

const BookmarkAnimeButton = ({icon,buttonText,isStored,anime,style}:Props) => {
 const router = useRouter();
 const {removeAnimeFromList,addAnimeToList} = useAnimeListManager();
  
 const onToggleBookmarkedAnime= async () =>{
  
  if(isStored){
      await removeAnimeFromList(anime.id);
    }
    else{
      await addAnimeToList(anime);
    }
    router.refresh();
  }
  return (
    <button className={style} onClick={onToggleBookmarkedAnime}>
      {icon}
      {buttonText}
     </button>    
  )
}

export default BookmarkAnimeButton;