import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { openai } from "../utils/openAi";
import { useEffect } from "react";

const useGetGptResults = (searchText) => {
  const dispatch = useDispatch();

  const getGptMovies = async () => {
    const gptStdQuery =
      "Act as a Movie Recommendation system and suggest some movies equal or  close/relevant for the query" +
      searchText +
      ". only give me 5 movie names, and comma seperated like the exapmple result given ahead. Example Result: Gadar, Shaolay, Don, Andaz Apna Apna, Golmaal";
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptStdQuery }],
      model: "gpt-3.5-turbo",
    });
    return gptResult.choices?.[0]?.message?.content.split(", ");
  };

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        encodeURIComponent(movie) +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results.find(
      (m) => m.title.toLowerCase() === movie.toLowerCase()
    );
  };

  const handleGPTSearchClick = async () => {
    const gptMovies = await getGptMovies();
    const promiseTmdbMovies = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseTmdbMovies);
    console.log({ Movies: gptMovies, Result: tmdbResults });
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return handleGPTSearchClick;
};

export default useGetGptResults;
