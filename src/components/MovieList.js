import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ listTitle, movies }) => {
  return (
    <div className="py-5 ps-10 bg-black first-of-type:bg-transparent   first-of-type:bg-gradient-to-t from-black via-black to-transparent">
      <div className="text-3xl font-bold mb-4">{listTitle}</div>
      <div className="flex gap-5 overflow-x-scroll overflow-y-hidden scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
