import React from 'react'
import { Button, Box, AppBar, Toolbar, IconButton, Typography, } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import '../JEM2.png'
import Navbar from './NavBar.css'

import Styled from 'styled-components';

import { Link } from 'react-router-dom';


function NavBar() {


    const StyledLink = Styled(Link)`
    color: white; 
    position: relative; 
    &:hover{color: #2F3130}; 
    text-decoration: none;
    margin: 3px;`

  return (

    <Box sx={{ flexGrow: 1 }} component="nav">
        <AppBar position="fixed" sx={{ backgroundColor: '#426F86'}}>
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                <img src="../JEM2.png" alt="" className='logoSize'/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <StyledLink to="/">Home</StyledLink> 
                    <StyledLink to="/Services"> Services</StyledLink>
                    <StyledLink to="/Jobs">Jobs</StyledLink>
                    <StyledLink to="/AboutUs">About Us</StyledLink>
                    <StyledLink to="/ContactUs">Contact Us</StyledLink>
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </Box>

  )
}

export default NavBar
