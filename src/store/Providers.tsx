'use client';

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store} from "./index";
import { setFavoriteAnime } from "./anime/animeSlice";

interface Props{
    children:React.ReactNode
}

export const Providers = ({children}:Props) =>{
    
    useEffect(()=>{
        const favoritesAnime = JSON.parse(localStorage.getItem('favorite-anime') ?? '[]');
        console.log(favoritesAnime);
        store.dispatch(setFavoriteAnime(favoritesAnime));
    },[])

    return (
     <Provider store={store}>
        {children}
     </Provider>
    )
}


