import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
import { cyan } from '@mui/material/colors';

function ResponsiveAppBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{backgroundColor: pink[100]}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Box sx={{width: '50%', display: 'flex'}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Products
          </Typography>
        
          <Button variant="contained" sx={{backgroundColor: cyan[100]}} onClick={() => navigate('/add')}>
            Add Product
          </Button>
          </Box>

          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Jika Abd" src="" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;