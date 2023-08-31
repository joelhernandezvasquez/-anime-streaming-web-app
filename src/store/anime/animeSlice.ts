import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FavoriteAnimeList } from '@/interfaces/favoriteAnimeList';

interface FavoriteAnimeState {
    favoritesAnime:FavoriteAnimeList[],
    isReady:boolean
}

const initialState:FavoriteAnimeState = {
 favoritesAnime:[],
 isReady:false
}

const animeSlice = createSlice({
  name: "anime",
  initialState,

  reducers: {

    addAnime(state,action:PayloadAction<FavoriteAnimeList>){
     state.favoritesAnime = [...state.favoritesAnime,action.payload];
     localStorage.setItem('favorite-anime',JSON.stringify(state.favoritesAnime));
    },
    
    setFavoriteAnime(state,action:PayloadAction<FavoriteAnimeList []>){
     state.favoritesAnime = action.payload;
    }

  }
});

export const {addAnime,setFavoriteAnime} = animeSlice.actions;

export default animeSlice.reducer;