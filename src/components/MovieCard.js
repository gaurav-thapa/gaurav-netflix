import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return <div className="shadow rounded-lg bg-red-300 min-w-44 hover:cursor-pointer hover:scale-110 ">
  <img className="rounded-lg" src={POSTER_URL+movie.poster_path} alt={movie.original_title} />
  </div>;
};

export default MovieCard;
