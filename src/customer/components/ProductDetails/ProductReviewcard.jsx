import React from 'react'
import { Rating,Grid,Box,Avatar} from '@mui/material';
const ProductReviewcard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                   <Box>
                    <Avatar  className='text-white' sx={{width:50, hight:50, bgcolor:"#9155fd"}}>R</Avatar>
                   </Box>
            </Grid>
         <Grid item xs={9}>
            <div className='space-y-2'>
               <div>
                <p className='font-semibold text-lg'>Ram</p>
                <p className='opacity-70'>April 7, 2024</p>
               </div>
            </div>
            <Rating value={4.5} name="half-rating" readOnly precision={0.5}/>
            <p  className='font-semibold opacity-70'>Nice Product, I love this</p>
         </Grid>


        </Grid>
    </div>
  )
}

export default ProductReviewcard