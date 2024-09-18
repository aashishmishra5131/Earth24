import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import {Button, Grid,Box, TextField} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../../state/Order/Action'
import {useNavigate} from 'react-router-dom';

const DeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {auth} = useSelector(store=>store);
  console.log(auth,"auth.user")

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const address={
           firstName:data.get("firstName"),
           lastName:data.get("lastName"),
           streetAddress:data.get("address"),
           city:data.get("city"),
           state:data.get("state"),
           zipCode:data.get("zip"),
           mobile:data.get("phoneNumber"),
        }
        
  const orderData = {address,navigate}
  dispatch(createOrder(orderData));
  console.log("Address",address);
}


  return (
    <div>
        <Grid container spacing={4}>
            <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                <div className='p-5 py-7 border-b cursor-pointer'>


                   {auth?.user?.address.map((item)=><AddressCard address={item} />)} 
                   {/* // Address ka kaam abhi baki hai. */}


                    <Button sx={{mt:2,bgcolor:"RGB(145 85 253)"}} size='large' variant='contained'>Deliver Here</Button>
                </div>

            </Grid>
            <Grid item xs={12} lg={7}>
                <Box className='border rounded-s-md shadow-md p-5'>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                             <Grid item xs={12} sm={6}>
                                <TextField
                                  required
                                  id="firstName"
                                  name="firstName"
                                  label="firstName"
                                  fullWidth
                                  autoComplete="given-name"
                                />
                             </Grid>
                             <Grid item xs={12} sm={6}>
                                <TextField
                                  required
                                  id="lastName"
                                  name="lastName"
                                  label="lastName"
                                  fullWidth
                                  autoComplete="given-name"
                                />
                             </Grid>
                             <Grid item xs={12}>
                                <TextField
                                  required
                                  id="address"
                                  name="address"
                                  label="address"
                                  fullWidth
                                  autoComplete="given-name"
                                  multiline
                                  rows={3}
                                />
                             </Grid>
                             <Grid item xs={12} sm={6}>
                                <TextField
                                  required
                                  id="city"
                                  name="city"
                                  label="city"
                                  fullWidth
                                  autoComplete="given-name"
                                />
                             </Grid>
                             <Grid item xs={12} sm={6}>
                                <TextField
                                  required
                                  id="state"
                                  name="state"
                                  label="state/Region/Province"
                                  fullWidth
                                  autoComplete="given-name"
                                />
                             </Grid>
                             <Grid item xs={12} sm={6}>
                                <TextField
                                  required
                                  id="zip"
                                  name="zip"
                                  label="zip/Postal code"
                                  fullWidth
                                  autoComplete="shipping postal-code"
                                />
                             </Grid>
                             <Grid item xs={12} sm={6}>
                                <TextField
                                  required
                                  id="phoneNumber"
                                  name="phoneNumber"
                                  label="phoneNumber"
                                  fullWidth
                                  autoComplete="given-name"
                                />
                             </Grid>
                             <Grid item xs={12} sm={6}>
                             <Button sx={{ py:1.5, mt:2,bgcolor:"RGB(145 85 253)"}} size='large' variant='contained' type='submit'>Deliver Here</Button>
                             </Grid>

                        </Grid>
                    </form>
                </Box>

            </Grid>
        </Grid>
    </div>
  )
}

export default DeliveryAddressForm