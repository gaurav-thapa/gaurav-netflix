import React, { useRef, useState } from "react";
import { API_OPTIONS, getSearchURL } from "../utils/constants";
import MovieCard from "./MovieCard";
// import openai from "../utils/openai";

const GptSearch = () => {
  const searchText = useRef();
  // async function search (text) {
  //   const chatCompletion = await openai.chat.completions.create({
  //     messages:[{role:"user", content:text}],
  //     model:'gpt-3.5-turbo',
  //   })
  //   console.log(chatCompletion.choices);
  // }
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
  async function search(text) {
    setIsLoading(true);
    const res = await fetch(getSearchURL(text), API_OPTIONS);
    const data = await res.json();
    const movies = data.results;
    const filteredMovies = movies.filter((movie)=>movie.poster_path!==null);
    setSearchedMovies(filteredMovies);
    setIsLoading(false);
    // console.log(data.results);
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setSearchedMovies([]);
    const inputText = searchText.current.value;
    // search(inputText);
    search(inputText);
  };
  return (
    <div
      className="-z-10 h-screen absolute top-0 w-full "
      style={{ backgroundImage: 'url("/no-auth.jpg")' }}
    >
      <div className="bg-black w-full h-full absolute top-0 rounded-lg bg-opacity-50 flex justify-center">
        <form
          className="absolute text-center flex top-36"
          onSubmit={formSubmitHandler}
        >
          <input
            ref={searchText}
            className="rounded-l-lg p-3 sm:w-96 "
            type="text"
            placeholder="GPT Search"
          />
          <button className="rounded-r-lg bg-red-600 font-bold text-white py-3 px-4">
            Search
          </button>
        </form>
        <div className=" w-screen absolute text-center top-80 flex gap-6 overflow-auto scrollbar-hide p-5">
          {isLoading&&<div className="text-white text-3xl font-bold">Loading...</div>}
          {searchedMovies.map((movie) => (
            <div className="">
              {console.log(movie.id)}
              <MovieCard movie={movie} key={movie.id+movie.original_title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
