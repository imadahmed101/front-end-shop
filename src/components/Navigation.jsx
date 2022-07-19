import React, { useState } from 'react'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import { Fireplace, Gradient, Mail, Notifications } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import '../styles/Navigation.css'



const StyledToolbar = styled(Toolbar)({
    backgroundColor: "#6C7A89",
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(() => ({
    backgroundColor: "white",
    padding: "0 10px",
    width: "40%"
}));

const Navigation = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    Spiceez
                </Typography>
                <Fireplace sx={{ display: { xs: "block", sm: "none" } }}
                    onClick={(e) => setOpen(true)} />

                <Link to="/" className='nav-link' >Home</Link>
                <Link to="/about" className='nav-link' >About</Link>
                <Link to="/contact" className='nav-link' >Contact</Link>
                <Search>
                    <InputBase placeholder='Search' sx={{ color: "black" }} />
                </Search>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem><Link to="/">Home</Link></MenuItem>
                <MenuItem><Link to="/about">About</Link></MenuItem>
                <MenuItem><Link to="/contact">Contact</Link></MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navigation