import React, { useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../state/Auth/Action";
import { register } from "../state/Auth/Action";

const RegisterForm = ({ handleClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(register(userData));
    console.log(userData);
    handleClose();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
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
              label="password"
              fullWidth
              autoComplete="password"
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
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>if you have already account ?</p>
          <Button
            onClick={() => navigate("/login")}
            className="ml-5"
            size="small"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

// import React, { useEffect } from 'react';
// import { Button, Grid, TextField } from '@mui/material';
// import { useNavigate } from 'react-router';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUser, register } from '../state/Auth/Action';

// const RegisterForm = ({ handleClose }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem('jwt');
//   const auth = useSelector((store) => store.auth);

//   useEffect(() => {
//     if (jwt) {
//       dispatch(getUser(jwt));
//     }
//   }, [jwt, auth.jwt, dispatch]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData(e.currentTarget);
//     const userData = {
//       firstName: data.get('firstName'),
//       lastName: data.get('lastName'),
//       email: data.get('email'),
//       password: data.get('password'),
//     };

//     dispatch(register(userData)).then((result) => {
//       if (result.type === 'REGISTER_SUCCESS') {
//         alert('Registration successful');
//         handleClose();
//         navigate('/'); // Redirect to the main page after registration
//       } else {
//         alert('Registration failed. Please check your input.');
//       }
//     })
//     .catch((error) => {
//       console.error('Error during registration:', error);
//       alert('An error occurred during registration. Please try again later.');
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id='firstName'
//               name='firstName'
//               label='First Name'
//               fullWidth
//               autoComplete='given-name'
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id='lastName'
//               name='lastName'
//               label='Last Name'
//               fullWidth
//               autoComplete='family-name'
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               id='email'
//               name='email'
//               label='Email'
//               fullWidth
//               autoComplete='email'
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               id='password'
//               name='password'
//               label='Password'
//               type='password'
//               fullWidth
//               autoComplete='new-password'
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               className='bg-[#9155FD] w-full'
//               type='submit'
//               variant='contained'
//               size='large'
//               sx={{ padding: '.8rem 0', bgcolor: '#9155FD' }}
//             >
//               Register
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//       <div className='flex justify-center flex-col items-center'>
//         <div className='py-3 flex items-center'>
//           <p>If you already have an account?</p>
//           <Button onClick={() => navigate('/login')} className='ml-5' size='small'>
//             Login
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;
