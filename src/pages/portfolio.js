import React, { useState } from "react";
import { Box, Grid, Grommet, ResponsiveContext, } from 'grommet';
import Mynav from "../components/nav";
import SimpleFooter from '../components/footer';

import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';


function Portfolio() {

    const customBreakpoints = deepMerge(grommet, {
        global: {
          breakpoints: {
            small: {
              value: 600,
            },
            medium: {
              value: 3000,
            },
            large: {
              value: 4000,
            },
          },
            colors: {
              brand: '#00739D',
            },
            font: {
              family: 'Roboto',
              size: '18px',
              height: '20px',
            },
        },
      });

     
    return (
  <Grommet theme={customBreakpoints} full>
    <Mynav/>
  </Grommet>
  
    );
  }
  
  export default Portfolio;
  