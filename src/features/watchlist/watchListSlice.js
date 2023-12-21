import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const fetchWatchList = createAsyncThunk(async () => {
  const usersCollectionDb = collection(db, "users");
  try {
    const response = await getDocs(usersCollectionDb);
    console.log("slice..........", response);
    return response;
  } catch (err) {
    console.log("error slice", err);
  }
  return null;
});

const initialState = {
  name: "",
  email: "",
  movies: [],
};

const watchListSlice = createSlice({
  name: "watchList",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchWatchList.fulfilled, (state, action) => {
      console.log("fulfilled watchlist");
    });
    builder.addCase(fetchWatchList.pending, (state, action) => {
      console.log("pending watchlist");
    });
    builder.addCase(fetchWatchList.rejected, (state, action) => {
      console.log("rejected watchlist");
    });
  },
});

export default watchListSlice.reducer;
