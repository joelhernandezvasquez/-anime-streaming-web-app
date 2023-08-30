import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FavoriteAnimeList } from '@/interfaces/favoriteAnimeList';

interface FavoriteAnimeState {
    favoritesAnime:FavoriteAnimeList[],
    isReady:boolean
}

const initialState:FavoriteAnimeState = {

 favoritesAnime:[{
  id:'1',
  title:'Bleach',
  thumbnail:'https://cdn.myanimelist.net/images/anime/2/29550.webp',
  episodes:456,
  status:'finished airing',
 }
 ],
 isReady:false
}

const animeSlice = createSlice({
  name: "anime",
  initialState,

  reducers: {

    // initCounterState (state,action:PayloadAction<number>){
     
    //   if(state.isReady) return ;
     
    //   state.count = action.payload;
    //   state.isReady = true

    // },


    // resetCount(state, action: PayloadAction<number>) {
    //     if(action.payload < 0) {
    //         action.payload = 0;
    //     }
    //   state.count = action.payload;
    // },
  },
});

export const {} = animeSlice.actions;

export default animeSlice.reducer;