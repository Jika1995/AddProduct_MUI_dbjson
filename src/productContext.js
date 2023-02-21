import React from 'react';
import axios from 'axios';

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  oneProduct: null
};

function reducer(state=INIT_STATE, action) {
  switch(action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: action.playload };
    case 'GET_ONE_PRODUCT':
        return { ...state, oneProduct: action.playload };
    default: 
      return INIT_STATE
  };
};

const ProductContextProvider = ({children}) => {

    const PRODUCTS_API = 'http://localhost:8000/products';
    const [state, dispatch] = React.useReducer(reducer, INIT_STATE)

    async function getProducts () {
      let res = await axios(PRODUCTS_API);
      dispatch({
        type: 'GET_PRODUCTS',
        playload: res.data
      })
    };

    async function createProduct(newProduct) {
      await axios.post(PRODUCTS_API, newProduct);
      getProducts()
    };

  return (
    <productsContext.Provider value={{
        products: state.products,
        oneProduct: state.oneProduct,

        createProduct,
        getProducts,
    }}>
        {children}
    </productsContext.Provider>
  )
}

export default ProductContextProvider