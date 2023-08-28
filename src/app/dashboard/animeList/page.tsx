import { Metadata } from "next";
import FavoriteAnimeList from "./components/FavoriteAnimeList";
import { IoBookmarkOutline } from "react-icons/io5";
import style from './animeList.module.css';

export const metadata: Metadata = {
    title: 'My anime list',
    description: 'my anime list to watch',
  }

const AnimeListPage = () => {
  return (
    <section className={style.container}>
      <h1> 
        <IoBookmarkOutline size={40}/>
         My Anime List 
      </h1>

      <h2>Recent Activity</h2>

      <FavoriteAnimeList/>

    </section>
  )
}

export default AnimeListPage