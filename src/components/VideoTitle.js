import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="h-full flex flex-col justify-center 
    p-5 sm:p-20 text-white bg-gradient-to-r from-black via-transparent to-transparent
    absolute top-0"
    >
      <div className="text-3xl sm:text-6xl md:w-1/2 font-bold mb-5">{title}</div>
      <div className="w-1/2 sm:w-1/3 sm:text-lg line-clamp-6">{overview}</div>
      <div className="flex gap-3 my-10 font-bold">
        <button className="bg-white hover:bg-gray-200 text-black p-2 rounded">
          {" "}
          ▶ Play Trailer
        </button>
        <button className="bg-gray-400 bg-opacity-80 hover:bg-opacity-50 text-white p-2 rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
