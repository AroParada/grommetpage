import React, { useState } from "react";
import { Box, Button, Collapsible, Heading, Grommet, ResponsiveContext, Layer } from 'grommet';
import MyCard from './components/card'
import Typical from 'react-typical'
import Mynav from "./components/nav";
import Intro from './components/intro'

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
  <Grommet theme={theme} full>
  <Mynav/>
  <Intro/>
  <MyCard/>
  </Grommet>
  );
}

export default App;
