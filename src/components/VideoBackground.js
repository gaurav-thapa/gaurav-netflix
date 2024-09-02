import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ id }) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const getVideos = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await res.json();
    const videos = data.results;
    const filteredVideos = videos.filter((video) => video.type === "Trailer");
    if(filteredVideos.length===0){
      console.log('no trailer found. runninng random trailer');
    }
    const trailer = filteredVideos.length !== 0 ? filteredVideos[0] : videos[0];
    // console.log(trailer);
    setTrailerKey(trailer.key);
  };
  useEffect(() => {
    getVideos(id);
  }, []);
  return (
    <div>
      <iframe
        className="w-full h-screen"
        src={`https://www.youtube.com/embed/${trailerKey}?&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
