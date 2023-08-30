import Image from 'next/image';
import { IoHeartOutline,IoTrashOutline } from 'react-icons/io5';
import AnimeRatingStars from '@/components/AnimeRatingStars/AnimeRatingStars';
import style from '../animeList.module.css';
interface Props{
  id:string,
  title:string,
  thumbnail:string,
  episodes:number,
  status:string,
}

export const AnimeFavoriteCard = ({id,title,thumbnail,episodes,status}:Props) => {
 
    return (
    <li className={style.anime_favorite_card}>
     <Image
        className={style.anime_favorite_card_image}
        width={250}
        height={140}
        src={thumbnail}
        alt={`${title} thumbnail`}
      />

    <h3 className={style.anime_favorite_card_title}>{title}</h3>
    <div>
    <AnimeRatingStars 
        count={5}
        color={'#d5a807fd'}
        size={16}
        gap={5}
    />
    </div>
    <p className={style.anime_favorites_card_episodes}>Episodes : {episodes} </p>
  
    <div className={style.anime_favorites_card_footer}>
   
    <p className={style.anime_favorite_card_status}>Status: <span className={style.anime_card_status_description}>{status}</span></p>
     <IoHeartOutline size={25}/>
     <IoTrashOutline size = {25}/>
    </div>
    </li>
  )
}
