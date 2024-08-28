import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAdmins = createAsyncThunk('admins/fetchAdmin', async (_, { extra: axiosInstance }) => {
  const { data } = await axiosInstance.get('/admins');
  return data;
});

const adminsSlice = createSlice({
  name: 'admins',
  initialState: {
    admins: [],
    status: 'idle',
    error: '', 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdmins.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAdmins.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.admins = action.payload;
      })
      .addCase(fetchAdmins.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export default adminsSlice.reducer;