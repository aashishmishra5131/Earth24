import {
  AppBar,
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
  IconButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { Routes, Route } from "react-router-dom";
import CreateProductForm from "./components/CreateProductForm";
import CustomersTable from "./components/CustomersTable";
import OrdersTable from "./components/OrdersTable";
import ProductsTable from "./components/ProductsTable";
import AdminDashboard from "./components/Dashboard";


const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <AddShoppingCartIcon /> },
  {
    name: "Customers",
    path: "/admin/customers",
    icon: <FaceRetouchingNaturalIcon />,
  },
  { name: "Orders", path: "/admin/orders", icon: <LocalGroceryStoreIcon /> },
  { name: "AddProduct", path: "/admin/product/create", icon: <AddTaskIcon /> },
];

const drawerWidth = 240;

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setSideBarVisible(!sideBarVisible);
  };

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        mt:4,
        color:"green"
      }}
    >
      <List>
        {menu.map((item) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => {
              navigate(item.path);
              if (!isLargeScreen) {
                handleDrawerToggle();
              }
            }}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex",}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0} 
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          {!isLargeScreen && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        aria-label="admin navigation"
      >
        <Drawer
          variant="temporary"
          open={sideBarVisible}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block"},
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/product/create" element={<CreateProductForm />} />
          <Route path="/customers" element={<CustomersTable />} />
          <Route path="/orders" element={<OrdersTable />} />
          <Route path="/products" element={<ProductsTable />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Admin;
