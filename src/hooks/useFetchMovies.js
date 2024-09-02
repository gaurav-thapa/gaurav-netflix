import { useEffect } from "react";
import {
  API_OPTIONS,
  POPULAR_MOVIES_API,
  TOP_RATED_MOVIES_API,
  UPCOMING_MOVIES_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { movieSliceActions } from "../store/movieSlice";

const useFetchMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movie);

  const getMovies = async (api) => {
    const movieRes = await fetch(api, API_OPTIONS);
    const movieData = await movieRes.json();
    const movies = movieData.results;
    return movies;
  };
  const getAllMovieData = async () => {
    const popularMovies = await getMovies(POPULAR_MOVIES_API);
    const topRatedMovies = await getMovies(TOP_RATED_MOVIES_API);
    const upcomingMovies = await getMovies(UPCOMING_MOVIES_API);
    dispatch(
      movieSliceActions.addSecondaryMovies({
        popularMovies,
        topRatedMovies,
        upcomingMovies,
      })
    );
  };
  useEffect(() => {
    if (
      !movies.popularMovies ||
      !movies.topRatedMovies ||
      !movies.upcomingMovies
    ) {
      getAllMovieData();
    }
  }, []);
};
export default useFetchMovies;
