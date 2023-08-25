import Link from 'next/link';
import { IoStarHalfOutline,IoStarSharp } from 'react-icons/io5';
import style from './heroContent.module.css';
import AnimeRatingStars from '@/components/AnimeRatingStars/AnimeRatingStars';

const HeroContent = () => {
  return (
    <>
    <p>Season 1</p>
    <h2 className={style.hero_heading}>Demon Slayer</h2>
    <AnimeRatingStars
         count={5}
         color={'#FEC700'}
         size={20}
         gap={8}
    />
    <p className={style.hero_content}>A youth begins a quest to fight demons and save his sister after finding
     his family slaughtered and his sister turned into a demon.
    </p>
    <Link href="/">
     <button>Watch</button>
     </Link>
     
     </>
  )
}

export default HeroContent