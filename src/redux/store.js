import { configureStore } from "@reduxjs/toolkit";
import problemReducer from "./ProblemSlice.js";
import SelectedProblemReducer from "./SelectedProblemSlice";
const store = configureStore({
  reducer: {
    problems: problemReducer,
    selectedProblem: SelectedProblemReducer,
  },
});

export default store;
