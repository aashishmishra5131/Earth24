import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findAdminProducts } from '../../state/Product/Action';
import { Avatar, Button, Card, CardHeader } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductsTable = () => {
const dispatch = useDispatch();
const {product}= useSelector(store=>store);
console.log("products.....",product);
  useEffect(()=>{
    const data = {
      category: "mens_kurta",
      colors: [],
      sizes: [],
      minPrice:0,
      maxPrice:100000,
      minDiscount:0,
      sort:"price_low",
      pageNumber:1,
      pageSize: 1,
      stock:"",
    };

   dispatch(findAdminProducts(data));
  },[])

  return (
    <div className='p-10'>

<Card className='mt-2' sx={{bgcolor:'#F3B63A'}}>
  <CardHeader title="All Products"/>

  <TableContainer component={Paper} sx={{bgcolor:'#F9DDA4'}}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
        <TableCell>Image</TableCell>
          <TableCell>Product Title</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Colour</TableCell>
          <TableCell>Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {product.products?.content?.map((item) => (
          <TableRow
            key={item._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell><Avatar src={item.imageUrl}></Avatar></TableCell>
            <TableCell component="th" scope="row">
              {item.title}
            </TableCell>
            <TableCell>{item.category.name}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{item.color}</TableCell>
            <TableCell>
              <Button><DeleteIcon/></Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Card>
  </div>
  )
}

export default ProductsTable