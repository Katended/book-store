import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under Construction...',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    toggleStatus: (state) => {
      state.status = 'Under Construction...';
    },
  },
});

export const { toggleStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
