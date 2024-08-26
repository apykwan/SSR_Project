import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async (_, { extra: axiosInstance }) => {
  const { data } = await axiosInstance.get('/current_user');
  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
    status: 'idle',
    error: '', 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export default authSlice.reducer;