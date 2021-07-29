import React from "react";
import { Main, Heading, Box, Grommet, } from 'grommet';
import Mynav from "../components/nav";
import SimpleFooter from '../components/footer';
import { RichFooter } from "../components/richfooter";

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
    <Main background="light-2" elevation="large" pad="large" gap="large">
    <Heading margin="none">Portfolio.</Heading>
    <RichFooter/>
      <Box flex />
    </Main>
    <SimpleFooter />
  </Grommet>
  
    );
  }
  
  export default Portfolio;
  