import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import useGetGptResults from "../hooks/useGetGptResults";

const GPTSearchBar = () => {
  const languageSelector = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const handleGPTSearchClick = useGetGptResults(searchText);

  return (
    <div className="">
      <div className="md:pt-[10%] pt-[45%] flex justify-center">
        <form
          className=" w-full md:w-1/2 bg-black grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="p-2 m-4 col-span-9 text-black"
            placeholder={lang[languageSelector].gptSearchplaceholder}
            ref={searchText}
          />
          <button
            className="col-span-3 m-2 py-2 px-4 bg-red-700 text-white rounded-lg"
            onClick={() => handleGPTSearchClick()}
          >
            {lang[languageSelector].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
