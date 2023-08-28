import { AnimeFavoriteCard } from "./AnimeFavoriteCard";
import style from '../animeList.module.css';

const favoriteAnimes = [{
    id:'1',
    title:'Bleach',
    thumbnail:'https://cdn.myanimelist.net/images/anime/2/29550.webp',
    episodes:'456',
    status:'finished airing',
}]

const FavoriteAnimeList = () => {
  return (
    <ul className={style.anime_favorite_list_container}>
     {favoriteAnimes.map((anime)=>{
        return <AnimeFavoriteCard key={anime.id} {...anime} />
     })}
    </ul>
  )
}

export default FavoriteAnimeList