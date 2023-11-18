import React from "react";
import ReadMoreText from "./ReadMoreText";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl bold">{title}</h1>
      <ReadMoreText content={overview} maxCharacterCount={100} />
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-xl bg-opacity-80 rounded-md hover:bg-opacity-25">
          ▷ Play
        </button>
        <button className="bg-gray-500 text-white mx-2 p-4 px-12 text-xl bg-opacity-50 rounded-md hover:bg-opacity-25">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
