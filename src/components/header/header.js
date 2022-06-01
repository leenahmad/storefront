import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';





function Header(props) {
    return (
        <>
            <AppBar position="static" >
                <Toolbar variant="dense" >
                    <Typography  style={{marginRight:'75%'}} variant="h5" color="inherit" component="div">
                      
                        CART({props.Cart.length})
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

const mapStateToProps = state => ({
    Cart : state.cart
});

export default connect(mapStateToProps)(Header);
