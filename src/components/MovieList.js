import React, { useRef, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const [Hovering, setHovering] = useState(false);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 250;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 250;
    }
  };

  return (
    <div className="px-6">
      <h1 className="text-2xl font-bold text-white p-2">{title}</h1>
      <div
        className="flex overflow-x-auto no-scrollbar"
        ref={scrollContainerRef}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
        {Hovering && (
          <div>
            (
            <button
              className="absolute mt-[7%]  transform -translate-y-1/2 bg-gray-500 text-white p-3 rounded-full left-5"
              onClick={scrollLeft}
            >
              ⫷
            </button>
            <button
              className="absolute mt-[5%] transform -translate-y-1/2 bg-gray-500 text-white p-3 rounded-full right-5"
              onClick={scrollRight}
            >
              ⫸
            </button>
            )
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
