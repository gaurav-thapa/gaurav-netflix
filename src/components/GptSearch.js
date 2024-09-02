import React, { useRef } from "react";
import openai from "../utils/openai";

const GptSearch = () => {
  const searchText = useRef();
  async function search (text) {
    const chatCompletion = await openai.chat.completions.create({
      messages:[{role:"user", content:text}],
      model:'gpt-3.5-turbo',
    })
    console.log(chatCompletion.choices);
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const inputText = searchText.current.value;
    search(inputText);
  }
  return (
    <div
      className="-z-10 h-screen absolute top-0 w-full "
      style={{ backgroundImage: 'url("/no-auth.jpg")' }}
    >
      <div className="bg-black w-full h-full absolute top-0 rounded-lg bg-opacity-50 flex justify-center">
        <form className="absolute top-36" onSubmit={formSubmitHandler}>
          <input
          ref={searchText}
            className="rounded-l-lg p-3 w-96 "
            type="text"
            placeholder="GPT Search"
          />
          <button className="rounded-r-lg bg-red-600 font-bold text-white py-3 px-4">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
