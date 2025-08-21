import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function HomeR3Table() {
  return (
  <>
   <div style={{ margin: "1rem", padding: "0" }}>
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow sx={{ height: "36px" }}>
          <StyledTableCell sx={{ padding: "4px 8px", fontSize: "0.8rem" }}>
            Dessert (100g serving)
          </StyledTableCell>
          <StyledTableCell align="center" sx={{ padding: "4px 8px", fontSize: "0.8rem" }}>
            Calories
          </StyledTableCell>
          <StyledTableCell align="center" sx={{ padding: "4px 8px", fontSize: "0.8rem" }}>
            Fat&nbsp;(g)
          </StyledTableCell>
          <StyledTableCell align="center" sx={{ padding: "4px 8px", fontSize: "0.8rem" }}>
            Carbs&nbsp;(g)
          </StyledTableCell>
          <StyledTableCell align="center" sx={{ padding: "4px 8px", fontSize: "0.8rem" }}>
            Protein&nbsp;(g)
          </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name} sx={{ height: "32px" }}>
            <StyledTableCell component="th" scope="row" sx={{ padding: "4px 8px", fontSize: "0.8rem" }}>
              {row.name}
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ padding: "4px 8px", fontSize: "0.8rem" }}>
              {row.calories}
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ padding: "4px 8px", fontSize: "0.8rem" }}>
              {row.fat}
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ padding: "4px 8px", fontSize: "0.8rem" }}>
              {row.carbs}
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ padding: "4px 8px", fontSize: "0.8rem" }}>
              {row.protein}
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</div></>


  );
}
