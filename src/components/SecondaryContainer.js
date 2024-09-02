import React from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  useFetchMovies();
  const movies = useSelector((store) => store.movie);
  if(!movies){
    return;
  }
  const nowPlayingMovies = movies.nowPlayingMovies;
  const popularMovies = movies.popularMovies;
  const topRatedMovies = movies.topRatedMovies;
  const upcomingMovies = movies.upcomingMovies;
  const data = [
    { listTitle: "Now Playing Movies", movieList: nowPlayingMovies },
    { listTitle: "Popular Movies", movieList: popularMovies },
    { listTitle: "Top Rated Movies", movieList: topRatedMovies },
    { listTitle: "Upcoming Movies", movieList: upcomingMovies },
  ];
  return (
    <div className="text-white absolute top-2/3 pb-10 bg-gradient-to-t from-black to-transparent w-full">
      {data.map((dp) => (
        <MovieList
          key={dp.listTitle}
          listTitle={dp.listTitle}
          movies={dp.movieList}
        />
      ))}
    </div>
  );
};

export default SecondaryContainer;
