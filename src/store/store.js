import { configureStore } from "@reduxjs/toolkit";
import userSliceReducers from "./userSlice";
import movieSliceReducer from "./movieSlice";
import { gptSearchSliceReducers } from "./gptSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducers,
    movie: movieSliceReducer,
    gptSearch: gptSearchSliceReducers,
  },
});
