import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadProducts, depleteStock } from '../../store/products.js';
import { addToCart } from '../../store/cart.js';
import { If } from '../if/if';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '24px',
    paddingRight: '24px',
  },
  root: {
    minWidth: 200,
  },
  media: {
    height: 140,
  },
});

  
  const ProductDisplay = (props) => {

  useEffect(() => {
    props.loadProducts();
    // eslint-disable-next-line
  }, []);

  const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.gridContainer} justify="center">
      {props.products.map(product => {
        return (
          <If condition={product.category === props.activeCategory && product.inStock > 0}>
            <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
            <Card  className={classes.root} raised>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://source.unsplash.com/random?placeholder"
                  title={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                  </Typography>
                  <Typography variant="h6"  component="h6">
                    ${(product.price).toFixed(2)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => {props.addToCart(product);
                props.depleteStock(product)}}>
                  ADD TO CART
                </Button>
                <Button size="small" color="primary">
                  VIEW DETAILS
                </Button>
              </CardActions>
            </Card>
            </Grid>
          </If>
        )
      })}
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    activeCategory: state.categories.activeCategory,
  }
}

const mapDispatchToProps = {
  loadProducts,
  addToCart,
  depleteStock,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay);