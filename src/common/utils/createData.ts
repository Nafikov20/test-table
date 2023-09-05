export type CreateDataReturnType = {
  close: number;
  high: number;
  low: number;
  open: number;
  priceDate: string;
  symbol: string;
};
export const createData = (
  symbol: string,
  priceDate: string,
  high: number,
  low: number,
  open: number,
  close: number
): CreateDataReturnType => ({ close, high, low, open, priceDate, symbol });
