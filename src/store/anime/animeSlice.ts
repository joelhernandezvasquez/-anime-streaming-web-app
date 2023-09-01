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
    },

    removeAnime(state,action:PayloadAction<string>){
      console.log(action.payload);
      state.favoritesAnime = state.favoritesAnime.filter((anime)=> anime._id !== action.payload);
      console.log(state.favoritesAnime);
      localStorage.setItem('favorite-anime',JSON.stringify(state.favoritesAnime));
    }

  }
});

export const {addAnime,setFavoriteAnime,removeAnime} = animeSlice.actions;

export default animeSlice.reducer;