

import Image from "next/image";
import Link from "next/link";
import { shortnenText } from "@/helpers";
import { AnimeListResponse } from "@/interfaces/animeListResponse";
import AnimeRatingStars from "../AnimeRatingStars/AnimeRatingStars";
import {getAnime } from "@/animes/helpers/anime";
import BookmarkAnimeButton from "@/app/dashboard/animeList/components/BookmarkAnimeButton";
import style from './animeList.module.css';

interface Props {
  anime: AnimeListResponse
}

const AnimeCard = async ({ anime }: Props) => {
  const {_id,title,episodes,status,synopsis,image} = anime;
  const isAnimeStored = await getAnime(_id);
 
  return (
    <li className={style.anime_card}>
      <Image
        className={style.anime_card_image}
        width={250}
        height={140}
        src={image}
        alt={`${title} thumbnail`}
      />
      <h3 className={style.anime_card_title}>{title}</h3>
      <p className={style.anime_card_status}>Status: <span className={style.anime_card_status_description}>{status}</span></p>
     
      <div className={style.anime_card_back}>
       <Link href={`/dashboard/anime/${_id}`}>
        <p>{title}</p>
        <p className={style.anime_card_ranking}>
        <AnimeRatingStars
         count={5}
         color={'#d5a807fd'}
         size={16}
         gap={8}
        />
        </p>
        <p>{episodes} Episodes</p>
        <p className={style.anime_card_synopsis}> {shortnenText(synopsis, 140)}</p>
        </Link>
         
        <div className={style.anime_card_icon_actions}>
          <BookmarkAnimeButton
            isStored={isAnimeStored}
            anime = {{id:_id,title,thumb:image,episodes,status}}
          />
        </div>
      </div>
    </li>
  )
}

export default AnimeCard;