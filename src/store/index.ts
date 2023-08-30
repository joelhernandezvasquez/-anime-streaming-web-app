import { configureStore } from '@reduxjs/toolkit';
import animeReducer from './anime/animeSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
//import { localStorageMiddleware } from './middlewares/localStorage-middleware';

export const store = configureStore({
  reducer: {
   anime:animeReducer,
  },
  // middleware:(getDefaultMiddleware)=> getDefaultMiddleware()
  // .concat(localStorageMiddleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;