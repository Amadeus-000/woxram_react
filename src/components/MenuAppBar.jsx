import React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Drawer from '@mui/material/Drawer';
import {List,ListItem,ListItemButton,ListItemText} from '@mui/material';

import title from "../assets/images/woxram_logo_regular_360x60_white.png"
import logoimg from "../assets/images/woxram_icon.png"

const theme = createTheme({
  palette: {
    primary: {
      main: "#282c34", // この色は任意のカラーコードに置き換えることができます。
    },
  },
  components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: 300,
                    backgroundColor: "#282c34", // Drawerの背景色を変更
                    color: "#FFFFFF", // Drawer内のテキストの色を変更
                },
            },
        },
    },
});

const MenuAppBar = () => {
    const [drawerOpened, setDrawerOpened] = useState(false);
	return (
        <>
		<ThemeProvider theme={theme}>
            <AppBar position="fixed" color="primary" style={{height: "50px"}}>
                <Toolbar style={{minHeight:"100%"}}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpened(true)}>
                        <MenuIcon />
                    </IconButton>
                    <img src={logoimg} alt="woxram logo" style={{height:"30px",marginLeft:"5px"}} />
                    <a href='/'><img src={title} alt="woxram logo" style={{height:"17px",marginTop:"5px",marginLeft:"10px"}} /></a>
                </Toolbar>
            </AppBar>

            <Drawer anchor={'left'} open={drawerOpened} onClose={() => setDrawerOpened(false)}>
                <List component="nav">
                    <ListItem>
                        <ListItemButton component="a" href="/" rel="noopener noreferrer"><ListItemText primary="Home" /></ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component="a" href="/about/" rel="noopener noreferrer"><ListItemText primary="About" /></ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component="a" href="/login/" rel="noopener noreferrer"><ListItemText primary="login" /></ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component="a" href="https://twitter.com/woxram" rel="noopener noreferrer"><ListItemText primary="Twitter" /></ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
		</ThemeProvider>
        </>
	);
};

export default MenuAppBar;