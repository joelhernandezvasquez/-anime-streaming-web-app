'use client';

import { useAppSelector } from "@/store";
import { AnimeFavoriteCard } from "./AnimeFavoriteCard";
import style from '../animeList.module.css';

const FavoriteAnimeList = () => {
 const favoriteAnimes = useAppSelector(state => state.anime.favoritesAnime);
 

  return (
    <ul className={style.anime_favorite_list_container}>
     {favoriteAnimes.map((anime)=>{
        return <AnimeFavoriteCard key={anime._id} {...anime} />
     })}
    </ul>
  )
}

export default FavoriteAnimeList