"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  StyledTableContainer,
  StyledTableCell,
  StyledTableRow,
  CoinCell,
  TokenIcon,
} from "./styles";

// Collection type for the table
export interface Collection {
  image: string;
  name: string;
  floorPrice: number;
  topBid: number;
  change1D: number;
  change7D: number;
  volume1D: number;
  volume7D: number;
  totalVolume: number;
  owners: string;
  supply: number;
}

interface CollectionTableProps {
  collections: Collection[];
}

const CollectionTable: React.FC<CollectionTableProps> = ({ collections }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const currentPageCollections = collections.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <StyledTableContainer>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">#</StyledTableCell>
              <StyledTableCell align="left">Collection</StyledTableCell>
              <StyledTableCell align="right">Floor Price</StyledTableCell>
              <StyledTableCell align="right">Top Bid</StyledTableCell>
              <StyledTableCell align="right">1D Change</StyledTableCell>
              <StyledTableCell align="right">7D Change</StyledTableCell>
              <StyledTableCell align="right">1D Volume</StyledTableCell>
              <StyledTableCell align="right">7D Volume</StyledTableCell>
              <StyledTableCell align="right">Total Volume</StyledTableCell>
              <StyledTableCell align="right">Owners</StyledTableCell>
              <StyledTableCell align="right">Supply</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageCollections.map((col, index) => (
              <StyledTableRow key={col.name}>
                <StyledTableCell align="left">
                  {page * rowsPerPage + index + 1}
                </StyledTableCell>
                <StyledTableCell>
                  <CoinCell>
                    <TokenIcon src={col.image} alt={col.name} />
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 500, fontSize: "16px" }}
                    >
                      {col.name}
                    </Typography>
                  </CoinCell>
                </StyledTableCell>
                <StyledTableCell align="right">
                  {col.floorPrice}
                </StyledTableCell>
                <StyledTableCell align="right">{col.topBid}</StyledTableCell>
                <StyledTableCell align="right">{col.change1D}%</StyledTableCell>
                <StyledTableCell align="right">{col.change7D}%</StyledTableCell>
                <StyledTableCell align="right">{col.volume1D}</StyledTableCell>
                <StyledTableCell align="right">{col.volume7D}</StyledTableCell>
                <StyledTableCell align="right">
                  {col.totalVolume}
                </StyledTableCell>
                <StyledTableCell align="right">{col.owners}</StyledTableCell>
                <StyledTableCell align="right">{col.supply}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "16px",
          gap: "8px",
        }}
      >
        <Typography variant="body2">Rows per page:</Typography>
        <select
          value={rowsPerPage}
          onChange={(e) => {
            setRowsPerPage(Number(e.target.value));
            setPage(0);
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        <Typography variant="body2">
          {`${page * rowsPerPage + 1}-${Math.min(
            (page + 1) * rowsPerPage,
            collections.length
          )} of ${collections.length}`}
        </Typography>
        <Box sx={{ display: "flex", gap: 0.5, ml: 1.5 }}>
          <IconButton
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
            size="small"
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton
            onClick={() => setPage(page + 1)}
            disabled={page >= Math.ceil(collections.length / rowsPerPage) - 1}
            size="small"
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
      </Box>
    </StyledTableContainer>
  );
};

export default CollectionTable;
