import SearchBar from '@/components/SearchBar/SearchBar';
import style from './main.module.css';
import Avatar from '@/components/Avatar/Avatar';
import avatarImage from '../../../assets/63352B2A-EB71-460B-BA27-0EA1F12A8EFF_1_105_c.jpeg';


const page = () => {
  return (
    <section className={style.home_page}>
        <SearchBar/>
        <Avatar name={'Joel Hernandez'} imageSrc={avatarImage} />
    </section>
  )
}

export default page