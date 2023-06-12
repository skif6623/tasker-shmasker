import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IdeaType } from './ideasSlice';
import axios from 'axios';

axios.defaults.baseURL = 'https://644d6936cfdddac970a41176.mockapi.io';

export const fetchIdeas = createAsyncThunk<
  IdeaType[],
  undefined,
  { rejectValue: string }
>('ideas/fetchIdeas', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('ideas');
    return response.data;
  } catch (error) {
    return rejectWithValue('Server Error');
  }
});
