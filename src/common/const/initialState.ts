// eslint-disable-next-line unicorn/filename-case
import { GetDataResponseType } from '../../api';

export const initialState = {
  dataForDisplaying: [
    {
      change: 0,
      changeOverTime: 0,
      changePercent: 0,
      close: 0,
      date: '',
      fClose: 0,
      fHigh: 0,
      fLow: 0,
      fOpen: 0,
      fVolume: 0,
      high: 0,
      id: '',
      key: '',
      label: '',
      low: 0,
      marketChangeOverTime: 0,
      open: 0,
      priceDate: '',
      subkey: '',
      symbol: '',
      uClose: 0,
      uHigh: 0,
      uLow: 0,
      uOpen: 0,
      uVolume: 0,
      updated: 0,
      volume: 0,
    },
  ],
} as GetDataResponseType;
