import axios from 'axios';

let initialState = {
  products: []
}
let products;

export default function ProductsReducer(state = initialState, action) {
  let { type, payload } = action;

  switch(type) {

    case "LOAD_PRODUCTS":
      return { products: payload.results };

    case "ADD_TO_CART":

      products = state.products.map(product => {
          if(product.name === payload.name) {
            return { _id: product._id, name: product.name, category: product.category, inStock: product.inStock - 1, price: product.price };
          }
          return { _id: product._id, name: product.name, category: product.category, inStock: product.inStock, price: product.price };
        });

      return { products: products };

    case "REMOVE_FROM_CART":

      products = state.products.map(product => {
          if(product.name === payload.name) {
            return { _id: product._id, name: product.name, category: product.category, inStock: product.inStock + payload.inCart, price: product.price };
          }
          return { _id: product._id, name: product.name, category: product.category, inStock: product.inStock, price: product.price };
        });

      return { products: products };

    case "RETURN_TO_STOCK":

      products = state.products.map(product => {
          if(product.name === payload.name) {
            return { _id: product._id, name: product.name, category: product.category, inStock: payload.inStock, price: product.price };
          }
          return { _id: product._id, name: product.name, category: product.category, inStock: product.inStock, price: product.price };
        });

        return { products: products };

    case "DEPLETE_STOCK":

        products = state.products.map(product => {
          if(product.name === payload.name) {
            return { _id: product._id, name: product.name, category: product.category, inStock: payload.inStock, price: product.price };
          }
          return { _id: product._id, name: product.name, category: product.category, inStock: product.inStock, price: product.price };
        });

      return { products: products };

    default:
      return state;
  }
}

export const loadProducts = () => (dispatch, getState) => {
  return axios.get('https://api-js401.herokuapp.com/api/v1/products')
    .then(response => {
      dispatch({
        type: "LOAD_PRODUCTS",
        payload: response.data
      });
    });
}

export const returnToStock = (product) => (dispatch, getState) => {
  product.inStock += product.inCart;
  delete product.inCart;
  return axios.put(`http://localhost:3000/products/${product._id}`, product)
    .then(response => {
      // console.log('put reshelf', response);
      dispatch({
        type: "RETURN_TO_STOCK",
        payload: response.data
      });
    });
}

export const depleteStock = (product) => (dispatch, getState) => {
  product.inStock-= 1;
  return axios.put(`http://localhost:3000/products/${product._id}`, product)
    .then(response => {
      // console.log('put deplete', response);
      dispatch({
        type: "DEPLETE_STOCK",
        payload: response.data
      });
    });
}