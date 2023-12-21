import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instanceURL from "../../axios";

export const fetchMovieApi = createAsyncThunk(
  "users/fetchByIdStatus",
  async (fetchURL) => {
    const response = await instanceURL.get(fetchURL);
    return response.data.results;
  }
);

const initialState = {
  movies: [],
  loading: false,
  error: "",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchMovieApi.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchMovieApi.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchMovieApi.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default movieSlice.reducer;
