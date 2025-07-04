import { createSlice } from "@reduxjs/toolkit";

const selectedProblemSlice = createSlice({
  name: "selectedProblem",
  initialState: null,
  reducers: {
    setSelectedProblem: (state, action) => action.payload,
    clearSelectedProblem: () => null,
  },
});

export const { setSelectedProblem, clearSelectedProblem } = selectedProblemSlice.actions;

export default selectedProblemSlice.reducer;
