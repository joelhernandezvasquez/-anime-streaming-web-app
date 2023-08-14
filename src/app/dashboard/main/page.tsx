import Link from 'next/link';
import SearchBar from '@/components/SearchBar/SearchBar';
import Hero from '../components/Hero/Hero';
import Avatar from '@/components/Avatar/Avatar';
import avatarImage from '../../../assets/63352B2A-EB71-460B-BA27-0EA1F12A8EFF_1_105_c.jpeg';
import heroImg from '../../../assets/Demon_Slayer_World_Tour_KV_ENG.0.jpg';
import style from './main.module.css';

const page = () => {
  return (
    <div className={style.home_page}>
      <header className={style.home_page_header}>
       <SearchBar/>
        <Avatar name={'Joel Hernandez'} imageSrc={avatarImage} />
      </header>
      
       <Hero heroImg={heroImg}>
        <p>Season 1</p>
         <h2 className={style.hero_heading}>Demon Slayer</h2>
         <p className={style.hero_content}>A youth begins a quest to fight demons and save his sister after finding
          his family slaughtered and his sister turned into a demon.
         </p>
         <Link href="/">
          <button>Watch</button>
          </Link>
       </Hero>
    </div>
  )
}

export default page