import { useEffect } from 'react';

import { CreateDataReturnType } from '../utils/createData';
import { DataForDisplayingType } from '../../api';

type StringMap = { [key: string]: CreateDataReturnType[] };

type UseDroppType = {
  rowsForDisplaying: string;
  setSymbolDataState: (arg: { quotes: DataForDisplayingType[] }) => void;
  symbolData: DataForDisplayingType[];
  symbolDataState: { quotes: DataForDisplayingType[] };
};
export const UseDropp = ({ symbolData, rowsForDisplaying, symbolDataState, setSymbolDataState }: UseDroppType) => {
  const objectData: StringMap = {
    1: symbolData.slice(0, 9),
    2: symbolData.slice(9, 18),
    3: symbolData.slice(18, 27),
    4: symbolData.slice(27, 36),
  };

  useEffect(() => {
    setSymbolDataState({ quotes: objectData[rowsForDisplaying] as DataForDisplayingType[] });
  }, [symbolData, rowsForDisplaying]);

  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }
    const reorder = (list: DataForDisplayingType[], startIndex: number, endIndex: number) => {
      const result = [...list];
      const [removed] = result.splice(startIndex, 1);

      result.splice(endIndex, 0, removed);

      return result;
    };

    const quotes = reorder(symbolDataState.quotes, result.source.index, result.destination.index);

    setSymbolDataState({ quotes });
  }

  return onDragEnd;
};
