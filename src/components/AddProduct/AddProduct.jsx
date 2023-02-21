import React, {useContext, useState} from 'react';

import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {lightGreen} from '@mui/material/colors';
import { Button } from '@mui/material';
import { productsContext } from '../../productContext';
import { cyan } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: lightGreen[100],
  border: '2px solid #fff',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  color: 'white',
};

const AddProduct = () => {

  const { createProduct } = useContext(productsContext);

  const INIT_STATE = {
    title: '',
    price: 0,
    description: '',
    image: ''
  };

  const [product, setProduct] = useState(INIT_STATE);

  function handleSubmit(e) {
    e.preventDefault();

    let newProduct = {
      ...product,
      [e.target.name]: e.target.value
    };

    setProduct(newProduct);
  };

  function saveProduct () {
    createProduct(product);
    setProduct({
      title: '',
      price: 0,
      description: '',
      image: ''
    });

    alert('Your product successfully saved!')

  };

  return (
    <div>
      <FormControlUnstyled>
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Enter Product info</h2>
          <TextField id="outlined-basic" label="Title" variant="outlined" size='small' sx={{m: 0.5, width: '30%', color: 'white'}} value={product.title} name='title' onChange={handleSubmit}/>
          <TextField id="outlined-basic2" label="Price" variant="outlined" size='small' sx={{m: 0.5, width: '30%'}}  value={product.price} name='price' onChange={handleSubmit}/>
          <TextField id="outlined-basic3" label="Description" variant="outlined" size='small' sx={{m: 0.5, width: '30%'}}  value={product.description} name='description' onChange={handleSubmit}/>
          <TextField id="outlined-basic3" label="Image" variant="outlined" size='small' sx={{m: 0.5, width: '30%'}}  value={product.image} name='image' onChange={handleSubmit}/>
          <Button variant="contained" sx={{background: cyan[100]}} onClick={saveProduct}>Add this Product</Button>
        </Box>
      </FormControlUnstyled>
    </div>
  )
}

export default AddProduct

