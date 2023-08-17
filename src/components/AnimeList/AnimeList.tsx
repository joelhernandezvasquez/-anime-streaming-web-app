import { Suspense } from 'react';
import { getAnimeList } from '@/services';
import AnimeCard from './AnimeCard';
import style from './animeList.module.css';

interface Props {
  titleList: string,
  size: number
}

const AnimeList = async ({ titleList, size }: Props) => {

  const animeList = await getAnimeList(size);

  return (
    <div className={style.anime_list_container}>
      <h2 className={style.anime_list_header}>{titleList}</h2>
      <ul className={style.anime_list_card_container}>
        <Suspense fallback={<h2>Loading...</h2>}>
          {animeList.map((anime) => {
            return <AnimeCard key={anime._id} anime={anime} />
          })}
        </Suspense>
      </ul>
    </div>
  )
}

export default AnimeList