'use client';
import { deleteAnime } from '@/animes/helpers/anime';
import { useRouter } from 'next/navigation';

import {IoTrashOutline } from 'react-icons/io5';
interface Props{
    animeId:string
}
const RemoveAnimeFromFavorite = ({animeId}:Props) => {
  const router = useRouter();

 const onDeleteAnime = async() =>{
   await deleteAnime(animeId); 
   router.refresh();
 }
  return (
    <div onClick={onDeleteAnime}>
        <IoTrashOutline size = {25}/>
    </div>
  )
}

export default RemoveAnimeFromFavorite