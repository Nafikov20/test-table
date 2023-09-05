import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getRatesTC } from '../../redux/dataReducer';
import { Container, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { createData } from '../../common/utils/createData';
import { PaginationControlled } from '../pagination/Pagination';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Draggable } from 'react-beautiful-dnd';
import { paginationContainer, StyledTableCell, StyledTableRow, table, tableContainer } from './StyledTableCell';
import { DataForDisplayingType } from '../../api';

type StockTableType = {
  quotes: DataForDisplayingType[];
  setRowsForDisplaying: (number: string) => void;
};
export const StockTable = ({ quotes, setRowsForDisplaying }: StockTableType) => {
  const dispatch = useAppDispatch();
  const symbolData = useAppSelector((state) => state.tableData.dataForDisplaying);

  useEffect(() => {
    dispatch(getRatesTC());
  }, [dispatch]);

  const rows = quotes.map((item) =>
    createData(item.symbol, item.priceDate, item.high, item.low, item.open, item.close)
  );

  const numberOnPage = 8;
  const totalPage = Math.round(symbolData.length / numberOnPage);

  return (
    <>
      <TableContainer component={Paper} sx={tableContainer}>
        <Table aria-label='customized table' sx={table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Symbol</StyledTableCell>
              <StyledTableCell align='right'>PriceDate</StyledTableCell>
              <StyledTableCell align='right'>Open</StyledTableCell>
              <StyledTableCell align='right'>High</StyledTableCell>
              <StyledTableCell align='right'>Low</StyledTableCell>
              <StyledTableCell align='right'>Close</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <Draggable key={`id-${row.priceDate}`} draggableId={`id-${row.priceDate}`} index={index}>
                {(provided) => (
                  <StyledTableRow
                    key={`id-${row.priceDate}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <StyledTableCell component='th' scope='row'>
                      {row.symbol}
                    </StyledTableCell>
                    <StyledTableCell align='right'> {row.priceDate}</StyledTableCell>
                    <StyledTableCell align='right'>{row.open.toFixed(2)}</StyledTableCell>
                    <StyledTableCell align='right'>{row.high.toFixed(2)}</StyledTableCell>
                    <StyledTableCell align='right'>{row.low.toFixed(2)}</StyledTableCell>
                    <StyledTableCell align='right'>{row.close.toFixed(2)}</StyledTableCell>
                  </StyledTableRow>
                )}
              </Draggable>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Container sx={paginationContainer}>
        <PaginationControlled setRowsForDisplaing={setRowsForDisplaying} totalPage={totalPage} />
      </Container>
    </>
  );
};
