import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addSecondaryMovies:(state, action) => {
        state.popularMovies = action.payload.popularMovies;
        state.topRatedMovies = action.payload.topRatedMovies;
        state.upcomingMovies = action.payload.upcomingMovies;
    }
  },
});
export const movieSliceActions = movieSlice.actions;
const movieSliceReducer = movieSlice.reducer;
export default movieSliceReducer;
