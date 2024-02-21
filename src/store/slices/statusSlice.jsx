// successSlice.js
import { createSlice } from "@reduxjs/toolkit";

const successSlice = createSlice({
  name: "success",
  initialState: {
    isSuccess: false,
  },
  reducers: {
    setSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
  },
});

export const { setSuccess } = successSlice.actions;
export default successSlice.reducer;
