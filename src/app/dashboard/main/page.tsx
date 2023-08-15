
import SearchBar from '@/components/SearchBar/SearchBar';
import Hero from '../components/Hero/Hero';
import Avatar from '@/components/Avatar/Avatar';
import avatarImage from '../../../assets/63352B2A-EB71-460B-BA27-0EA1F12A8EFF_1_105_c.jpeg';
import heroImg from '../../../assets/Demon_Slayer_World_Tour_KV_ENG.0.jpg';
import style from './main.module.css';
import HeroContent from './components/HeroContent/HeroContent';

const page = () => {
  return (
    <div className={style.home_page}>
      <header className={style.home_page_header}>
       <SearchBar/>
        <Avatar name={'Joel Hernandez'} imageSrc={avatarImage} />
      </header>
      
       <Hero heroImg={heroImg}>
         <HeroContent/>
       </Hero>
    </div>
  )
}

export default page