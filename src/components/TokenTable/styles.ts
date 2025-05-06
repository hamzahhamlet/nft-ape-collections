import { styled } from "@mui/material";
import { Paper, TableCell, TableRow, Box } from "@mui/material";

export const StyledTableContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgb(20,22,25)",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 2px 16px 0 rgba(0,0,0,0.7)"
      : "0 2px 8px 0 rgba(0,0,0,0.05)",
  borderRadius: 14,
  border:
    theme.palette.mode === "dark" ? "1px solid #23262F" : "1px solid #eee",
  marginTop: 0,
  overflow: "hidden",
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid ${
    theme.palette.mode === "dark" ? "#23262F" : "#e5e7eb"
  }`,
  padding: "12px 16px",
  color: "#fff",
  backgroundColor: "rgb(20,22,25)",
  fontSize: "15px",
  fontWeight: 500,
  "&.MuiTableCell-head": {
    color: "#fff",
    backgroundColor: "#23262F",
    fontWeight: 700,
    fontSize: "13px",
    borderBottom: `2px solid ${
      theme.palette.mode === "dark" ? "#23262F" : "#e5e7eb"
    }`,
    letterSpacing: 0.5,
    textTransform: "none",
  },
  "&:first-of-type": {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  "&:last-of-type": {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "rgb(20,22,25)",
  transition: "background 0.2s",
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#23262F" : "#f3f4f6",
  },
  "&.Mui-selected, &.Mui-selected:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#23262F" : "#e5e7eb",
  },
  "&:last-child td": {
    borderBottom: 0,
  },
}));

export const CoinCell = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "14px",
});

export const TokenIcon = styled("img")({
  width: "32px",
  height: "32px",
  borderRadius: "8px",
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  objectFit: "cover",
  padding: "2px",
  boxShadow: "0 1px 4px 0 rgba(0,0,0,0.10)",
  "&.fallback": {
    padding: "4px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  "@keyframes pulse": {
    "0%": { opacity: 1 },
    "50%": { opacity: 0.4 },
    "100%": { opacity: 1 },
  },
  "&.loading": {
    animation: "pulse 1.5s ease-in-out infinite",
  },
});
