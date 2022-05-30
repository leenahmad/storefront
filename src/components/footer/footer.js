import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function Footer() {
    return (
        <AppBar position="static" color ="primary" style={{position:'fixed',left:'0',bottom:'0',width:'100%'}}>
            <Container maxWidth="md">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div" style={{margin:'auto'}}>
                © 2022 LEEN ASAC
                </Typography>
            </Toolbar>
            </Container>
        </AppBar>
    )
}