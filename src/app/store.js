import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";
import watchListReducer from "../features/watchlist/watchListSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    watchList: watchListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //   thunk: {
      //     extraArgument: myCustomApiService,
      //   },
      serializableCheck: false,
    }),
});

export default store;
