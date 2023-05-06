import React from 'react';
import {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Drawer from '@mui/material/Drawer';
import {List,ListItem,ListItemButton,ListItemText} from '@mui/material';
import styled from "@emotion/styled";
import useScrollDirection from "./hooks/useScrollDirection";

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

    const scrollDirection = useScrollDirection();
    // 追加: ページ上部からのスクロール距離を取得
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.pageYOffset || document.documentElement.scrollTop);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const StyledAppBar = styled(AppBar)({
      transition: 'transform 0.2s ease-in-out',
      transform:
        // 変更: ページ上部から 200px 以内、またはスクロール方向が上の場合に AppBar を表示
        scrollPosition <= 200 || scrollDirection === 'up'
          ? 'translateY(0)'
          : 'translateY(-100%)',
    });

	return (
        <>
		<ThemeProvider theme={theme}>
            <StyledAppBar position="fixed" color="primary" style={{height: "50px"}}>
                <Toolbar style={{minHeight:"100%"}}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpened(true)}>
                        <MenuIcon />
                    </IconButton>
                    <img src={logoimg} alt="woxram logo" style={{height:"30px",marginLeft:"5px"}} />
                    <a href='/'><img src={title} alt="woxram logo" style={{height:"17px",marginTop:"5px",marginLeft:"10px"}} /></a>
                </Toolbar>
            </StyledAppBar>

            <Drawer anchor={'left'} open={drawerOpened} onClose={() => setDrawerOpened(false)}>
                <List component="nav">
                    <ListItem>
                        <ListItemButton component="a" href="/" rel="noopener noreferrer"><ListItemText primary="Home" /></ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component="a" href="https://twitter.com/woxram" rel="noopener noreferrer"><ListItemText primary="Twitter" /></ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component="a" href="/about/" rel="noopener noreferrer"><ListItemText primary="About" /></ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
		</ThemeProvider>
        </>
	);
};

export default MenuAppBar;