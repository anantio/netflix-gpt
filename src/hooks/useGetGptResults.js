import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { openai } from "../utils/openAi";

const useGetGptResults = (searchText) => {
  const dispatch = useDispatch();

  const getGptMovies = async () => {
    const gptStdQuery =
      "Act as a Movie Recommendation list system and suggest some movies relevant for query/word: " +
      searchText +
      ". only give me 20 movie names, and comma seperated like the example result given ahead. Example Result: Gadar, Shaolay, Don, Andaz Apna Apna, Golmaal and so on";
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptStdQuery }],
      model: "gpt-3.5-turbo",
    });
    return gptResult.choices?.[0]?.message?.content.split(", ");
  };

  const searchMovieTMDB = async (movie) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      return json.results.find(
        (m) => m.title.toLowerCase() === movie.toLowerCase()
      );
    } catch (error) {
      console.error(`Error fetching movie details for ${movie}:`, error);
      return null;
    }
  };

  const handleGPTSearchClick = async () => {
    const gptMovies = await getGptMovies();
    if (gptMovies.length > 0) {
      const promiseTmdbMovies = gptMovies.map((movie) =>
        searchMovieTMDB(movie)
      );
      const tmdbResults = await Promise.all(promiseTmdbMovies);
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    }
  };

  return handleGPTSearchClick;
};

export default useGetGptResults;
