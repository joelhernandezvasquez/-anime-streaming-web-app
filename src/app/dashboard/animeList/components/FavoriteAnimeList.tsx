'use client';

import { useAppSelector } from "@/store";
import { AnimeFavoriteCard } from "./AnimeFavoriteCard";
import EmptyAnimeList from './EmptyAnimeList';
import style from '../animeList.module.css';

const FavoriteAnimeList = () => {
 const favoriteAnimes = useAppSelector(state => state.anime.favoritesAnime);
 
  return (
    <>
      { favoriteAnimes.length > 0 ?
        (<>
          <h2>Recent Activity</h2>
           <ul className={style.anime_favorite_list_container}>
              {favoriteAnimes.map((anime)=>{
                return <AnimeFavoriteCard key={anime._id} {...anime} />
              })}
          </ul>
      </>
      )
      :
     <EmptyAnimeList/>
  }
</>
    
  )
}

export default FavoriteAnimeList