// import React from 'react'
// import {Button, Grid, TextField}from '@mui/material';
// import { useNavigate } from 'react-router';

// const LoginForm = ({handleClose}) => {
//     const navigate=useNavigate();

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         const data=new FormData(e.currentTarget);
//         const userdata={
//           email:data.get("email"),
//           password:data.get("password"),
//         }
//         console.log(userdata);
//         handleClose();
//       }
//     return (
//       <div>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                   <TextField
//                   required
//                   id='email'
//                   name='email'
//                   label="Email"
//                   fullWidth
//                   autoComplete='email'
//                   />
//               </Grid>
//               <Grid item xs={12}>
//                   <TextField
//                   required
//                   id='password'
//                   name='password'
//                   label="password"
//                   fullWidth
//                   autoComplete='password'
//                   />
//               </Grid>
//               <Grid item xs={12}>
//                   <Button
//                   className='bg-[#9155FD] w-full'
//                   type='submit'
//                   variant='contained'
//                   size='large'
//                   sx={{padding:".8rem 0", bgcolor:"#9155FD"}}
//                   >
//                 Login
//                   </Button>
//               </Grid>
//             </Grid>
//           </form>
//           <div className='flex justify-center flex-col items-center'>
//             <div className='py-3 flex items-center'>
//                 <p>if you don't already account ?</p>
//                 <Button onClick={()=>navigate("/register")} className='ml-5' size='small'>Register</Button>
//             </div>
//         </div>
//       </div>
//     )
//   }

// export default LoginForm

import React, { useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../state/Auth/Action"; // Ensure you import the login action

const LoginForm = ({ handleClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userdata = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(login(userdata));
    handleClose();
  };

  useEffect(() => {
    if (isAuthenticated) {
      window.alert("Login successful");
      handleClose();
      navigate("/");
    } else if (error) {
      alert("Login failed. Please check your credentials.");
    }
  }, [isAuthenticated, error, handleClose, navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>If you don't already have an account?</p>
          <Button
            onClick={() => navigate("/register")}
            className="ml-5"
            size="small"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
