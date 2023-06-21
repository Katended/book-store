import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import booksURL from '../Api2';

// const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fMTlag0rSBA6RI8ptwgh/books';

const initialState = {
  books: {},
};

export const fetchBooks = createAsyncThunk('book/fetchBooks', () => axios.get(booksURL).then((response) => response.data));

export const addBookApi = createAsyncThunk('book/addBookApi', async (newBook) => {
  const response = await axios.post(booksURL, newBook);
  return response.data;
});

export const DeleteBookApi = createAsyncThunk('book/DeleteBookApi', async (id) => {
  const response = await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fMTlag0rSBA6RI8ptwgh/books/${id}`);
  return response.data;
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

export default bookSlice.reducer;
