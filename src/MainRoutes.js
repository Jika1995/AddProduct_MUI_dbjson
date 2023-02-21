import React from 'react';
import AddProduct from './components/AddProduct/AddProduct';
import {Routes, Route} from 'react-router-dom';
import ProductContextProvider from './productContext';
import ProductList from './components/ProductList/ProductList';

const MainRoutes = () => {
  return (
    <ProductContextProvider>
        <Routes>
            <Route path='/' element={<ProductList />}/>
            <Route path='/add' element={<AddProduct />}/>
        </Routes>
    </ProductContextProvider>
  )
};

export default MainRoutes