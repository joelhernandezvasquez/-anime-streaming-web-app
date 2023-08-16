import Image from "next/image";
import { AnimeListResponse } from "@/interfaces/animeListResponse";
import style from './animeList.module.css';

interface Props{
    anime:AnimeListResponse
}

const AnimeCard = ({anime}:Props) => {
    console.log(anime)
  return (
    <li className={style.anime_card}>
    <Image
    className={style.anime_card_image}
    width={250}
    height={140}
    src={anime.image}
    alt={`${anime.title} thumbnail`}
    />
    <h3 className={style.anime_card_title}>{anime.title}</h3>
    <p className={style.anime_card_status}>Status: <span className={style.anime_card_status_description}>{anime.status}</span>
    </p>

    <div className={style.anime_card_back}>

    </div>
   </li>
  )
}

export default AnimeCard;