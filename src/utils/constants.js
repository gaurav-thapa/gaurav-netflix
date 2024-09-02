export const APP_NAME = "GRV-MOVIES";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_KEY,
  },
};
export const POPULAR_MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const TOP_RATED_MOVIES_API =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const UPCOMING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export const POSTER_URL = 'https://image.tmdb.org/t/p/w220_and_h330_face/';
// export const OPEN_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;