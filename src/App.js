import { Provider } from 'react-redux';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


import Header from './components/header/header';
import SimpleCart from './components/cart/cart';
import Categories from './components/storeFront/categories';
import CurrentCategory from './components/storeFront/Current-category';
import Products from './components/storeFront/products';
import store from './store/index';
import Footer from './components/footer/footer';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Provider store={store()}>
          <Header />
          <Grid container spacing={2}>
            <Grid item xs={9}>
          <Categories />
            </Grid>
            <Grid item xs={3}>
          <SimpleCart />
            </Grid>
            <Grid item xs={9}>
              <CurrentCategory />
            </Grid>
          </Grid>
          <Products />
          <Footer />
        </Provider>
      </Container>
    </React.Fragment>
  );
}

export default App;