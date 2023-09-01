'use client';

import { useAppDispatch } from '@/store';
import { removeAnime } from '@/store/anime/animeSlice';
import {IoTrashOutline } from 'react-icons/io5';

interface Props{
    animeId:string
}
const RemoveAnimeFromFavorite = ({animeId}:Props) => {
    const dispatch = useAppDispatch();

    const OnRemoveAnime = () =>{
        console.log(animeId)
        dispatch(removeAnime(animeId));
    }
  return (
    <div onClick={OnRemoveAnime}>
        <IoTrashOutline size = {25}/>
    </div>
  )
}

export default RemoveAnimeFromFavorite