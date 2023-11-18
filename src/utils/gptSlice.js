import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  initialState: {
    showGPTSearchView: false,
    movieResults: null,
    movieNames: null,
  },
  name: "gpt",
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearchView = !state.showGPTSearchView;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGPTSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
