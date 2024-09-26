import {
  Toolbar,
  useMediaQuery,
  useTheme,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  CssBaseline,
  Drawer,
  ListItemText,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import {useNavigate } from "react-router";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/Inbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import AddTaskIcon from '@mui/icons-material/AddTask';
import {Routes, Route} from 'react-router-dom';
import CreateProductForm from "./components/CreateProductForm";
import CustomersTable from "./components/CustomersTable";
import OrdersTable from "./components/OrdersTable";
import ProductsTable from "./components/ProductsTable";
import AdminDashboard from "./components/Dashboard";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <AddShoppingCartIcon/>},
  { name: "Customers", path: "/admin/customers", icon: <FaceRetouchingNaturalIcon/>},
  { name: "Orders", path: "/admin/orders", icon: <LocalGroceryStoreIcon />},
  { name: "AddProduct", path: "/admin/product/create", icon: <AddTaskIcon/>},
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height:"100%"
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText>
                {item.name}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
      <ListItem
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText>Account</ListItemText>
            </ListItemButton>
      </ListItem>
      </List>

    </Box>
  );

  return (
    <div>
      <div className='flex h-[100vh]'>
        <CssBaseline/>
        <div className="w-[15%] border border-r-gray-300 h-full">
         {drawer}
        </div>
      <div className="w-[85%]">
        <Routes>
          <Route path='/' element={<AdminDashboard/>}/>
          <Route path='/product/create' element={<CreateProductForm/>}/>
          <Route path='/customers' element={<CustomersTable/>}/>
          <Route path='/orders' element={<OrdersTable/>}/>
          <Route path='/products' element={<ProductsTable/>}/>
        </Routes>
      </div>
      </div>
    </div>
  );
};

export default Admin;
