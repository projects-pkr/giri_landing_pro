import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Popover from '@mui/material/Popover';
import SearchIcon from '@mui/icons-material/Search';
import PageviewIcon from '@mui/icons-material/Pageview';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import  Avatar  from '@mui/material/Avatar';



const nav_content = ['HOME', 'ABOUT', 'SERVICES', 'PAGES', 'PORTFOLIO', 'BLOG'];
const list_item = {
    'HOME': ['Sample Homepage1', 'Sample Homepage 2', 'Sample Homepage 3', 'Header Styles'],
    'ABOUT': ['About Us 1', 'About Us 2'],
    'SERVICES': ['Analytics Solution', 'Business Growth', 'Corporate Finance', 'Advance Report', 'Chain Management', 'Advance Analytics'],
    'PAGES': ['Services', 'Contact Us', 'Our Team', 'Shop', 'FAQs', 'Carrer', 'Error Page', 'Elements'],
    'PORTFOLIO': ['Project Style 1', 'Project Style 2', 'Project Style 3'],
    'BLOG': ['Blog Classic', 'Blog Grid', 'Blog Left Image', 'Simple Blog View ']
};

function Navbar() {
    const [handle_navbar, sethandle_navbar] = useState(null);
    const [menu_item, setmenu_item] = useState(null);

    const handleOpenNavMenu = (event) => {
        sethandle_navbar(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        sethandle_navbar(null);
    };

    const handleOpenMenu = (menu) => (event) => {
        setmenu_item(menu);
        sethandle_navbar(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setmenu_item(null);
        sethandle_navbar(null);
    };
    //----------------- popper content-------------------------------------
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <AppBar position="static">
            <Toolbar disableGutters sx={{height:"10vh",backgroundColor:"white"}}>
                {/* --------------Logo---------------------------------- */}
                <Box sx={{marginLeft:{xl:"12rem", md:"5rem",xs:"10px"}}}>
                    <img src="/public/Images/Navbar/logo.png" alt="Logo" style={{height:"48px"}}/>
                </Box>

                {/*------------------------------ Menu icon --------------------------- */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="initial"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={handle_navbar}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(handle_navbar)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {/* --------------------- menu items (xs size)-------------------------------*/}
                        {nav_content.map((item) => (
                            <MenuItem key={item} onClick={handleOpenMenu(item)}>
                                {item}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                {/* ---------------Menu items (xl size) -----------------------------------------*/}
                <Box sx={{  display: { xs: 'none', md: 'flex' },marginLeft:{xl:"11rem"},borderRight:"1px solid #f3f7f9 " }}>
                    {nav_content.map((item) => (
                        <Button
                            key={item}
                            aria-controls={`menu-${item}`}
                            aria-haspopup="true"
                            onClick={handleOpenMenu(item)}
                            sx={{ mx: 1, color: 'black',fontFamily:"poppins",fontWeight:"700" }}
                        >
                            {item}
                        </Button>
                    ))}
                    {/* --------------------Dropdown menus ((xl size))---------------------------------- */}
                    {nav_content.map((menu) => (
                        <Menu
                            key={menu}
                            id={`menu-${menu}`}
                            anchorEl={handle_navbar}
                            open={Boolean(handle_navbar && menu_item === menu)}
                            onClose={handleCloseMenu}
                            TransitionComponent={Fade}
                        >
                            {list_item[menu].map((menuItem) => (
                                <MenuItem key={menuItem} onClick={handleCloseMenu}>
                                    {menuItem}
                                </MenuItem>
                            ))}
                        </Menu>
                    ))}
                </Box>

                {/*---------------------right SIDE content   -------------------------------*/}
                <Box>
                    {/*------------------------- search box -------------------------*/}
                   <Box>
                   <Box onClick={handleClick} sx={{borderRadius:"50%",width:"30px",height:"30px",border:"1px solid black",textAlign:"center",marginLeft:"2rem"}} >
                    <Typography variant="body1" color="initial"><SearchIcon/></Typography>
                  </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        
        <Box><input type="text" placeholder='Type word then Enter'/><Button variant="text"><PageviewIcon/></Button></Box>
            {/* <Typography sx={{ p:"5" }}>The content of the Popover.</Typography> */}
      </Popover>
                   </Box>
                   {/* SEARCHBOX END */}
                                     
                </Box>
                <Box sx={{display:{xl:"flex",xs:"none" }}}>
                   <Box sx={{borderRadius:"50%",width:"30px",height:"30px",border:"1px solid black",textAlign:"center",marginLeft:"10px"}}><Avatar style={{height:"30px",width:"30px"}} >< ProductionQuantityLimitsIcon/></Avatar></Box>
                    <Box sx={{height:"30px",width:"130px",border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"2rem"}}><Typography style={{fontFamily:"poppins",fontSize:'12px',fontWeight:"500",color:"black"}} >GET START NOW!</Typography></Box>
                   </Box> 
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
