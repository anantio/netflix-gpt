import React from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";

const GPTSearchBar = () => {
  const languageSelector = useSelector((store) => store.config.language);

  return (
    <div className="">
      <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12">
          <input
            type="text"
            className="p-2 m-4 col-span-9"
            placeholder={lang[languageSelector].gptSearchplaceholder}
          />
          <button className="col-span-3 m-2 py-2 px-4 bg-red-700 text-white rounded-lg ">
            {lang[languageSelector].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
