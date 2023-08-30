import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AnimeListResponse } from '@/interfaces/animeListResponse';

interface FavoriteAnimeState {
    favoritesAnime:AnimeListResponse [],
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