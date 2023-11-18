import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div className="text-white">
      <div className="absolute -z-10">
        <img src={BG_URL} alt="" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
