import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";

export const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const nowTrendingMovies = useSelector(
    (store) => store.movies.nowTrendingMovies
  );
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    if (!nowTrendingMovies) getTrendingMovies();
  }, []);
};
