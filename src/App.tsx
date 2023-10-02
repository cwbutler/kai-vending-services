import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import RegisterVendor from './RegisterVendor';

function App() {
  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ mb: "20px" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kai's Vending Services
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <RegisterVendor />
      </Container>
    </React.Fragment>
  );
}

export default App;
