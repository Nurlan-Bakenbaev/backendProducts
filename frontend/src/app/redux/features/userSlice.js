import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postUser = createAsyncThunk(
  "user/postUser",
  async (userData, { rejectWithValue }) => {
    try {
        const res = awair axios.post("")
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
