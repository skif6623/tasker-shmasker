import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchIdeas } from './operations';
const isError = (action: AnyAction) => action.type.endsWith('rejected');

export type IdeaType = {
  activity: string;
  type: string;
  id: string;
};

type MainStateType = IdeaType[];

const initialState: MainStateType = [];

export const ideaSlice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchIdeas.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});

export const ideasReducer = ideaSlice.reducer;
