// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>;
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>;
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export const initialState = {
  error: null as null | string,
  status: 'idle' as RequestStatusType,
};

const slice = createSlice({
  initialState: initialState,
  name: 'appReducer',
  reducers: {
    setAppErrorAC(state, action: PayloadAction<{ error: null | string }>) {
      state.error = action.payload.error;
    },
    setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
      state.status = action.payload.status;
    },
  },
});

export const { setAppErrorAC, setAppStatusAC } = slice.actions;

export const appReducer = slice.reducer;
