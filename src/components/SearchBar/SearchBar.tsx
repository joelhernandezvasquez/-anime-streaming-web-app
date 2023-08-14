
import { IoSearchOutline } from 'react-icons/io5';
import style from './searchBar.module.css';

const SearchBar = () => {
  return (
    <div className={style.searchBar_container}>
      <IoSearchOutline size={25}/>
      <input className={style.input_search} type='text' placeholder='Search Everything...'/>
    </div>
  )
}

export default SearchBar;