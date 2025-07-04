import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch problems from backend
export const fetchProblems = createAsyncThunk("problems/fetch", async () => {
  const response = await axios.get("http://localhost:2000/api/problems");
  return response.data;
});

const problemSlice = createSlice({
  name: "problems",
  initialState: {
    list: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    // ✅ Local addProblem action for frontend updates
    addProblem: (state, action) => {
      state.list.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProblems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProblems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchProblems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// ✅ Export the addProblem action
export const { addProblem } = problemSlice.actions;

export default problemSlice.reducer;
