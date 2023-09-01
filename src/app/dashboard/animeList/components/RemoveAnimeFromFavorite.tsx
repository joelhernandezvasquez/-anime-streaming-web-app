'use client';

import useAnimeListManager from '@/hooks/useAnimeListManager';
import {IoTrashOutline } from 'react-icons/io5';

interface Props{
    animeId:string
}
const RemoveAnimeFromFavorite = ({animeId}:Props) => {

  const {removeAnimeFromList} = useAnimeListManager();

  return (
    <div onClick={() => removeAnimeFromList(animeId)}>
        <IoTrashOutline size = {25}/>
    </div>
  )
}

export default RemoveAnimeFromFavorite