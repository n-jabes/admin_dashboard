import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://i0.wp.com/laptopmedia.com/wp-content/uploads/2021/11/acernitro5an515-45featured.jpg?ssl=1",
      customer: "John Smith",
      date: "1 march",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "PlayStation 5",
      img: "https://merchandiseelectronics.com/wp-content/uploads/2021/03/PlayStation-5.jpg",
      customer: "Michael Doe",
      date: "1 march",
      amount: 900,
      method: "Online payment",
      status: "Approved",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8VVRqW9y3T3VDAk0EU7dqxGGUbknrd6bgQ&usqp=CAU",
      customer: "John Smith",
      date: "1 march",
      amount: 35,
      method: "Cash on delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://cdn.cnn.com/cnnnext/dam/assets/210804125008-razer-blade-15-lead.jpg",
      customer: "Jane Smith",
      date: "1 march",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://images-na.ssl-images-amazon.com/images/I/811QpiYXe-L._AC_SL1500_.jpg",
      customer: "Harold Carol",
      date: "1 march",
      amount: 2000,
      method: "Online",
      status: "Pending",
    }
  ]
  

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List