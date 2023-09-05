import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cloud.iexapis.com/',
});
const _apiKey = '';

export type DataForDisplayingType = {
  change: number;
  changeOverTime: number;
  changePercent: number;
  close: number;
  date: string;
  fClose: number;
  fHigh: number;
  fLow: number;
  fOpen: number;
  fVolume: number;
  high: number;
  id: string;
  key: string;
  label: string;
  low: number;
  marketChangeOverTime: number;
  open: number;
  priceDate: string;
  subkey: string;
  symbol: string;
  uClose: number;
  uHigh: number;
  uLow: number;
  uOpen: number;
  uVolume: number;
  updated: number;
  volume: number;
};
export type GetDataResponseType = {
  dataForDisplaying: DataForDisplayingType[];
};
export const cloudIexapisApi = {
  getData() {
    return instance.get<DataForDisplayingType[]>(`/stable/stock/AAPL/chart/1m?token=${_apiKey}`);
  },
};
