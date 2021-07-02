import React from 'react';
import Typical from 'react-typical'

import { Paragraph, grommet, Box, Button, Grommet } from 'grommet';


const Intro = () => {

    return (
    <Grommet theme={grommet}>
        <Box align="center" pad="">
        <Typical
          steps={['Hello, Im Aro', 1000 ,]}
          loop={3}
          wrapper="h1"
        /> 
        <Paragraph margin="none">
           Lorem ipsum dolor sit amet,
           consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua.
        </Paragraph>
          <Button label="Portfolio" href="http://aroparada.com/" target="_blank" rel="noopener"/>         
        </Box>
    </Grommet>

    )
}
export default Intro;