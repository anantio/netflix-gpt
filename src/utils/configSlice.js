import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    language: "en",
  },
  reducers: {
    changeLanguage: (state, actions) => {
      state.language = actions.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;
