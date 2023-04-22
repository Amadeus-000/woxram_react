import React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Drawer from '@mui/material/Drawer';
import {List,ListItem,ListItemButton,ListItemText} from '@mui/material';


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

// 使わない
const MenuAppBarStyle = {
	// color: "#e0f2f1",
	// backgroundColor: "#004d40"
};

const MenuAppBar = () => {
    const [drawerOpened, setDrawerOpened] = useState(false);
	return (
        <>
		<ThemeProvider theme={theme}>
            <AppBar position="fixed" color="primary" style={MenuAppBarStyle}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpened(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>Woxram</Typography>
                </Toolbar>
            </AppBar>

            <Drawer anchor={'left'} open={drawerOpened} onClose={() => setDrawerOpened(false)}>
                <List component="nav">
                    <ListItem>
                        <ListItemButton component="a" href="http://localhost:3000/" rel="noopener noreferrer"><ListItemText primary="aaa" /></ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component="a" href="https://example.com" rel="noopener noreferrer"><ListItemText primary="bbb" /></ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component="a" href="https://example.com" rel="noopener noreferrer"><ListItemText primary="ccc" /></ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component="a" href="https://example.com" rel="noopener noreferrer"><ListItemText primary="ddd" /></ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
		</ThemeProvider>
        </>
	);
};

export default MenuAppBar;