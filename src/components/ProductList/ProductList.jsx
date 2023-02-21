import React from 'react';
import {useContext, useEffect} from 'react';
import { productsContext } from '../../productContext';

import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { indigo } from '@mui/material/colors';

const ProductList = () => {

  const { products, getProducts} = useContext(productsContext);

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '80%', m: 'auto', mt: 2, mb: 2}} >
      {products.map(item => (
            <Card key={item.id} sx={{ width: '25%', mt: 2, backgroundColor: indigo[100]}} variant='outlined'>
            <CardMedia
              sx={{ height: 250 }}
              image={item.image}
              component='img'
              title="Product Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined">Edit</Button>
              <Button size="small" variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
            </CardActions>
          </Card>
      ))}
    </Box>
  )
}

export default ProductList