import { Notifications, Pets } from '@mui/icons-material';
import { AppBar, Box, InputBase, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const StyledToolbar =styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",

});

const Search =styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width : "40%"
}));

const Icons =styled(Box)(({theme})=>({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));

const UserBox =styled(Box)(({theme})=>({
  display:"flex",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}));



const Navbar = () => {
  const [open,setOpen]=useState(false);
  
  return (
    <AppBar position="sticky">
      <StyledToolbar>
     
        <Typography variant='h5'
        sx={{display:{xs:"none",sm:"block", md: "block",lg:"block",xl:"block",}}}> Aetrico amanas</Typography>
        <Pets sx={{display:{xs:"block",sm:"none", md: "none",lg:"none",xl:"none ",}}}/>
        <Search><InputBase placeholder='search...'/></Search>
        <Icons><Badge badgeContent={4} color="error">
                   <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                   <Notifications />
                </Badge>
                <Avatar sx={{width:30, height:30 }} 
                src="https://picsum.photos/seed/picsum/536/354" 
                onClick={(e)=>setOpen(true)}
                />

         </Icons>
         <UserBox onClick={(e)=>setOpen(true)} >
         <Avatar sx={{width:30, height:30 }} src="https://picsum.photos/seed/picsum/536/354" />
          <Typography variant='span'>Admin</Typography>
         </UserBox>
       </StyledToolbar>
       <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
