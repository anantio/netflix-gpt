import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black">
      <Header showProfileIcon={true} />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
export default Browse;
