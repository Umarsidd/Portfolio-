import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Backend API URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export const sendContactMessage = createAsyncThunk(
  'contact/sendMessage',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/contact`, {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      return {
        success: true,
        message: response.data.message || 'Message sent successfully!',
        data: response.data
      };
    } catch (error) {
      console.error('Contact API Error:', error);
      const errorMessage = error.response?.data?.message || 'Failed to send message. Please try again later.';
      return rejectWithValue(errorMessage);
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendContactMessage.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(sendContactMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;
