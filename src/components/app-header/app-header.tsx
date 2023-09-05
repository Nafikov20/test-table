import React, { FC, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { DataForDisplayingType } from '../../api';
import { useAppSelector } from '../../redux/store';
import { UseDropp } from '../../common/hooks/UseDropp';
import { StockTable } from '../table/StockTable';

export const AppHeader: FC = () => {
  const [rowsForDisplaying, setRowsForDisplaying] = useState<string>('1');
  const [symbolDataState, setSymbolDataState] = useState<{ quotes: DataForDisplayingType[] }>({
    quotes: [],
  });
  const symbolData = useAppSelector((state) => state.tableData.dataForDisplaying);
  const onDragEnd = UseDropp({ rowsForDisplaying, setSymbolDataState, symbolData, symbolDataState });

  return (
    <>
      <h1>Test work. Create table</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='stock-table'>
          {(provided: {
            droppableProps: JSX.IntrinsicAttributes &
              React.ClassAttributes<HTMLDivElement> &
              React.HTMLAttributes<HTMLDivElement>;
            innerRef: React.LegacyRef<HTMLDivElement> | undefined;
            placeholder:
              | string
              | number
              | boolean
              | React.ReactElement<any, string | React.JSXElementConstructor<any>>
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          }) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className='container'>
              <StockTable quotes={symbolDataState.quotes} setRowsForDisplaying={setRowsForDisplaying} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
