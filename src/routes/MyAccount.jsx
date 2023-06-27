import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuAppBar from '../components/MenuAppBar';

import React, { useState } from 'react';
import { Button, TextField, Container, Typography,Grid } from '@mui/material';

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from 'react-redux';

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

const MyAccount = () => {
    const isLoggedIn=useSelector(state => state.loggedIn);
    const isLoading=useSelector(state => state.isLoading);
    console.log("isLoggedIn",isLoggedIn);
    const navigate = useNavigate();
    useEffect(() => {
        if(!isLoggedIn && !isLoading){
            navigate('/');
        }
        console.log("useEffect");
      }, [isLoading,isLoggedIn]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <MenuAppBar />
                    <Container maxWidth="lg" sx={{marginTop:"5rem"}}>
                        <Typography variant="h4">マイアカウント</Typography>
                        <Grid container >
                            <p>account</p>
                        </Grid>
                    </Container>
            </ThemeProvider>
        </>
    );
};

export default MyAccount;