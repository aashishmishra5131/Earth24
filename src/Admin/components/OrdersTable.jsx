import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from "../../state/Admin/Order/Action";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, AvatarGroup, Button, Card, CardHeader } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";

const OrdersTable = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store);
  const { adminOrder } = useSelector((store) => store);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShipped = (orderId) =>{
    dispatch(shipOrder(orderId));
    handleClose();
  }
  const handleConfirmed = (orderId) =>{
    dispatch(confirmOrder(orderId));
    handleClose();
  }
  const handleDelivery = (orderId) =>{
    dispatch(deliveredOrder(orderId));
    handleClose();
  }
  const handleDelte = (orderId) =>{
    dispatch(deleteOrder(orderId));
  }

  useEffect(() => {
    dispatch(getOrders());
  }, [ adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered]);
  console.log("Admin price", adminOrder);

  return (
    <div className="pt-4 pl-4">
      <Card className="mt-2" sx={{ bgcolor: "#F3B63A" }}>
        <CardHeader title="All Products" />

        <TableContainer component={Paper} sx={{ bgcolor: "#F9DDA4" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Product Title</TableCell>
                <TableCell align="left">_Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Orders</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders?.map((item) => (
                <TableRow
                  key={item._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                      {item?.orderItems.map((orderItem) => (
                        <Avatar src={orderItem?.product?.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    {item?.orderItems.map((orderItem) => (
                      <p>{orderItem?.product?.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">{item._id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell>
                    <Button>
                      <span
                        className={`text-white px-5 py-2 rounded-full 
                    ${
                      item.orderStatus === "CONFIRMED"
                        ? "bg-[#369236]"
                        : item.orderStatus === "PLACED"
                        ? "bg-[#c94aae]"
                        : item.orderStatus === "SHIPPED"
                        ? "bg-[#332cbc]"
                        : item.orderStatus === "PENDING"
                        ? "bg-[#e8d43d]"
                        : "bg-[#ca5757]"
                    }`}
                      >
                        {item.orderStatus}
                      </span>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      Status
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmed(item._id)}>Confirmed Order</MenuItem>
                      <MenuItem onClick={() => handleShipped(item._id)}>Shipped Order</MenuItem>
                      <MenuItem onClick={() => handleDelivery(item._id)}>Delivered Order</MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleDelte(item._id)} variant="outlined">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrdersTable;
