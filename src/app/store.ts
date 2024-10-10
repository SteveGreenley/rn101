import {configureStore} from '@reduxjs/toolkit';
import carCollectionReducer from '../features/carCollection/carCollectionSlice';

export const store = configureStore({
  reducer: {
    carCollection: carCollectionReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
