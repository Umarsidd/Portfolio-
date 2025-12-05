import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import emailjs from '@emailjs/browser';

// EmailJS Credentials
const SERVICE_ID = 'service_zvhz9or';
const TEMPLATE_ID = 'template_sdysmco';
const PUBLIC_KEY = 'oJHL9iObrAzFpmuOu';

export const sendContactMessage = createAsyncThunk(
  'contact/sendMessage',
  async (formData, { rejectWithValue }) => {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Mohd Umar Siddiqui', // Optional, can be customized in template
      };

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      return { success: true, message: 'Message sent successfully!', data: response };
    } catch (error) {
      console.error('EmailJS Error:', error);
      return rejectWithValue('Failed to send message. Please try again later.');
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
