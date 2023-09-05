import { setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType } from 'redux/appReduser';
// eslint-disable-next-line unicorn/filename-case
import axios, { AxiosError } from 'axios';
// eslint-disable-next-line import/named
import { Dispatch } from 'redux';

export const errorUtils = (
  err: Error | AxiosError<{ error: string }>,
  dispatch: Dispatch<SetAppErrorActionType | SetAppStatusActionType>
) => {
  if (axios.isAxiosError(err)) {
    const error = err.response?.data ? err.response.data.message : err.message;

    dispatch(setAppErrorAC({ error }));
  } else {
    dispatch(setAppErrorAC({ error: `Native error ${err.message}` }));
  }
  dispatch(setAppStatusAC({ status: 'failed' }));
};
