import React from 'react'
import {Grid} from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import {useNavigate} from "react-router-dom"
const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
           <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://5.imimg.com/data5/SELLER/Default/2022/12/BK/LG/ON/121727599/1-3-500x500.jpeg" alt=""/>
                <div className='ml-5 space-y-2'>
                    <p className=''>Women Slim Jeans</p>
                    <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color: Blue</p>
                </div>
            </div>
            </Grid> 
            <Grid item xs={2}>
                <p>$2333</p>
            </Grid>
            <Grid item xs={4}>
               {true && <div><p>
                <AdjustIcon sx={{width:"15px", height:"15px"}} className="text-green-600 mr-2"/>
                    <span>
                        Delivered On March 03
                    </span>
                </p>
                <p className='text-xs'>Your Item Has Been Delivered</p>
                </div>}
                {false&&<p>Expected Delivery On MAr 03</p>}
            </Grid>
         </Grid>
    </div>
  )
}

export default OrderCard