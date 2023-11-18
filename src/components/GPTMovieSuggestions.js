import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) {
    return null;
  }
  return (
    <div className="py-5 mt-10 bg-black bg-opacity-60">
      <MovieList
        key={movieNames}
        title={"Movies Recommendation"}
        movies={movieResults}
      />
    </div>
  );
};

export default GPTMovieSuggestions;
