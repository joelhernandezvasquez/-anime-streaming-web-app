import SearchBar from '@/components/SearchBar/SearchBar';
import Avatar from '@/components/Avatar/Avatar';
import avatarImage from '../../../assets/63352B2A-EB71-460B-BA27-0EA1F12A8EFF_1_105_c.jpeg';
import style from './main.module.css';

const page = () => {
  return (
    <div className={style.home_page}>
      <header className={style.home_page_header}>
       <SearchBar/>
        <Avatar name={'Joel Hernandez'} imageSrc={avatarImage} />
      </header>
       
    </div>
  )
}

export default page