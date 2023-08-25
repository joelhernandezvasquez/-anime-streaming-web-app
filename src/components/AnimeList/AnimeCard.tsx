import Image from "next/image";
import Link from "next/link";
import { shortnenText } from "@/helpers";
import { AnimeListResponse } from "@/interfaces/animeListResponse";
import { IoStarSharp,IoPlay, IoBookmarkOutline, IoAddOutline } from 'react-icons/io5';
import style from './animeList.module.css';


interface Props {
  anime: AnimeListResponse
}

const AnimeCard = ({ anime }: Props) => {

  return (
    <li className={style.anime_card}>
      <Link href={`/dashboard/anime/${anime._id}`}>
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
        <p>{anime.title}</p>
        <p className={style.anime_card_ranking}>
          <IoStarSharp style={{ color: '#d5a807fd', fontSize: '1rem', marginRight: '.5rem' }} />
          <IoStarSharp style={{ color: '#d5a807fd', fontSize: '1rem', marginRight: '.5rem' }} />
          <IoStarSharp style={{ color: '#d5a807fd', fontSize: '1rem', marginRight: '.5rem' }} />
          <IoStarSharp style={{ color: '#d5a807fd', fontSize: '1rem', marginRight: '.5rem' }} />
          <IoStarSharp style={{ color: '#d5a807fd', fontSize: '1rem', marginRight: '.5rem' }} />
        </p>
        <p>{anime.episodes} Episodes</p>
        <p className={style.anime_card_synopsis}> {shortnenText(anime.synopsis, 140)}</p>
        
        <div className={style.anime_card_icon_actions}>
          <IoPlay size={25} />
          <IoBookmarkOutline size={25} />
          <IoAddOutline size={25} />
      </div>
      
      </div>

    </Link>
    </li>
  )
}

export default AnimeCard;