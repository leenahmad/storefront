import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';





export default function Header() {
    return (
        <>
            <AppBar position="static" >
                <Toolbar variant="dense" >
                    <Typography  style={{marginRight:'75%'}} variant="h5" color="inherit" component="div">
                        OUR STORE
                    </Typography>

                  

               <div style={{marginRight:'100px'}}>
               <Typography   variant="h5" color="inherit" component="div">
                        cart
                    </Typography>
                    
                    </div>
                </Toolbar>
            </AppBar>

           
        </>
    )
}