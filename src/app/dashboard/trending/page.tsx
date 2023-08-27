import { Metadata } from "next";
import style from './trending.module.css';
import AnimeList from "@/components/AnimeList/AnimeList";

export const metadata: Metadata = {
  title: 'Trending',
  description: 'Most Trending Anime',
}

const trending = () => {
  return (
    <section className={style.container} >
     <AnimeList titleList='Most Popular Anime' size={40}/>
    </section>
  )
}

export default trending