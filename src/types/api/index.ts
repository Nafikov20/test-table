// eslint-disable-next-line import/named
import { AxiosRequestConfig } from 'axios';

export interface ApiResponse<T> {
  data: T;
  error: boolean;
  status: number;
}

export interface ApiErrorToastParams {
  errorToast?: {
    show: boolean;
    text?: string;
  };
  redirect?: boolean;
}

export type ApiRequestParams = AxiosRequestConfig & ApiErrorToastParams;
