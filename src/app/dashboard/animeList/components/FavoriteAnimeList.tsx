 
import { AnimeFavoriteCard } from "./AnimeFavoriteCard";
import EmptyAnimeList from './EmptyAnimeList';
import { getAnimes } from "@/animes/helpers/anime";
import style from '../animeList.module.css';

const FavoriteAnimeList = async () => {

const favoriteAnimes = await getAnimes();

 return (
    <>
      { favoriteAnimes.length > 0 ?
        (<>
          <h2>Recent Activity</h2>
           <ul className={style.anime_favorite_list_container}>
              {favoriteAnimes.map((anime)=>{
                return <AnimeFavoriteCard key={anime.id} {...anime} />
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