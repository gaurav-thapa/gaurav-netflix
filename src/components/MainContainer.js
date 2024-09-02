import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies || movies.length === 0) {
    return;
  }
  const mainMovie = movies[Math.floor(Math.random() * 20)];
  // console.log("mm - ", mainMovie);
  const { id, original_title, overview } = mainMovie;
  return (
    <div className="h-screen relative -top-28 -z-10">
      <div className="relative">
        <VideoBackground id={id} />
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
