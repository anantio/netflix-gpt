import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  initialState: {
    showGPTSearchView: false,
  },
  name: "gpt",
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearchView = !state.showGPTSearchView;
    },
  },
});

export const { toggleGPTSearchView } = gptSlice.actions;
export default gptSlice.reducer;
