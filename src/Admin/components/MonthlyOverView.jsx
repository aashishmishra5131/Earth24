import MovingIcon from '@mui/icons-material/Moving';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'
import { Avatar, Box, Card, CardContent, CardHeader, IconButton, Typography, Grid } from '@mui/material';

const salesData = [
    {
        stats:'245K',
        tittle:'Sales',
        color:'#192A56',
        icon:<MovingIcon sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats:'14.5K',
        tittle:'Customers',
        color:'#26ae60',
        icon:<AccountCircleIcon sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats:'1.54K',
        tittle:'Products',
        color:'#BA2F16',
        icon:<SmartphoneIcon sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats:'85K',
        tittle:'Revenue',
        color:'#0ABDE3',
        icon:<CurrencyRupeeIcon sx={{fontSize:"1.75rem"}}/>
    },
]

const renderStats = ()=>{
    return salesData.map((item,index)=>(
        <Grid item xs={12} sm={3} key={index}>
          <Box sx={{display:"flex", alignItems:"center"}}>
          <Avatar variant='rounded' sx={{mr:3, width:44, height:44, boxShadow:3, color:'white', background:`${item.color}`}}>
            {item.icon}
          </Avatar>
          <Box sx={{display:'flex', flexDirection:'column'}}>
           <Typography variant='caption'>{item.tittle}</Typography>
           <Typography variant='h6'>{item.stats}</Typography>
          </Box>
          </Box>
        </Grid>
    ))
}

const MonthlyOverView = () => {
  return (
   <Card sx={{bgcolor:'black', color:'white'}}>
    <CardHeader title="Monthly Overview" action={
        <IconButton size='small'>
            <MoreVertIcon sx={{ color: 'white' }}/>
        </IconButton>
    }
    subheader={
        <Typography variant='body2'>
        <Box component='span' sx={{fontWeight:600, color:'white'}}>
           Total 48.5% growth 😎 this month
        </Box>
        </Typography>
    }
    titleTypographyProps={{
        sx:{
            mb:2.5,
            lineHeight:'2rem !important',
            letterSpacing:'0.15px !important'
        }
    }}
     />
     <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`, bgcolor:'black', color:'white'}}>
      <Grid container spacing ={[5,0]}>
         {renderStats()}
      </Grid>
     </CardContent>
   </Card>
  )
}

export default MonthlyOverView