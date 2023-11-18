import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) {
    return;
  }
  return (
    <div className="w-48 pr-4">
      <img alt="" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
