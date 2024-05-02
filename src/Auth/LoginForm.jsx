import React from 'react'
import {Button, Grid, TextField}from '@mui/material';
import { useNavigate } from 'react-router';

const LoginForm = () => {
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault()
        const data=new FormData(e.currentTarget);
        const userdata={
          email:data.get("email"),
          password:data.get("password"),
        }
        console.log(userdata);
      }
    return (
      <div>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                  <TextField 
                  required
                  id='email'
                  name='email'
                  label="Email"
                  fullWidth
                  autoComplete='email'
                  />
              </Grid>
              <Grid item xs={12}>
                  <TextField 
                  required
                  id='password'
                  name='password'
                  label="password"
                  fullWidth
                  autoComplete='password'
                  />
              </Grid>
              <Grid item xs={12}>
                  <Button 
                  className='bg-[#9155FD] w-full' 
                  type='submit'
                  variant='contained'
                  size='large'
                  sx={{padding:".8rem 0", bgcolor:"#9155FD"}}
                  >
                Login
                  </Button>
              </Grid>
            </Grid>
          </form>
          <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex items-center'>
                <p>if you don't already account ?</p>
                <Button onClick={()=>navigate("/register")} className='ml-5' size='small'>Register</Button>
            </div>
        </div>
      </div>
    )
  }

export default LoginForm