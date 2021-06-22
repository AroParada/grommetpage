import React, { useState } from "react";
import { Box, Button, Collapsible, Heading, Grommet, ResponsiveContext, Layer } from 'grommet';
import { FormClose, Notification } from 'grommet-icons';
import MyCard from './components/card'
import Typical from 'react-typical'

function App() {

  const theme = {
    global: {
      colors: {
        brand: '#00739D',
      },
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };
   
  return (
  <Grommet background="#00739D" theme={theme} full>
  <MyCard/>
  </Grommet>
  );
}

export default App;
