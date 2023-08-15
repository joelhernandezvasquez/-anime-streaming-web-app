import { getAnimeList } from '@/services';
import style from './animeList.module.css';

interface Props{
    titleList:string,
    size:number
}

const AnimeList = async ({titleList,size}:Props) => {
 
  const animeList = await getAnimeList(10);
  console.log(animeList);

  return (
    <div className={style.anime_list_container}>
       <h2 className={style.anime_list_header}>{titleList}</h2>
      
    </div>
  )
}

export default AnimeList