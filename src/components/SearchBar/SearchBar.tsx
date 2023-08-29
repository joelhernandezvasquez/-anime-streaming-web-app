'use client';

import { ChangeEvent, FormEvent,useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoSearchOutline } from 'react-icons/io5';
import style from './searchBar.module.css';

 const SearchBar = () => {
  const [search,setSearch] = useState('');
  const router = useRouter();

  const onSubmitSearch = (event:FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    router.push(`/dashboard/search/${search}`)
  }

  const onChangeSearchInput = (e:ChangeEvent<HTMLInputElement>) =>{
   setSearch(e.target.value);
  }

  return (
    <form className={style.searchBar_container} onSubmit={onSubmitSearch} >
      <IoSearchOutline size={25}/>
      <input 
        className={style.input_search} 
        type='text' name='search' placeholder='Search Everything...'
        value={search}
        onChange={onChangeSearchInput}
      />
    </form>
  )
}

export default SearchBar;