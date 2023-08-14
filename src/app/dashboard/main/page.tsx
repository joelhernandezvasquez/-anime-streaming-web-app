import SearchBar from '@/components/SearchBar/SearchBar';
import style from './main.module.css';

const page = () => {
  return (
    <section className={style.home_page}>
        <SearchBar/>
    </section>
  )
}

export default page