import React from 'react';

import { Heading, Paragraph, grommet, Box, Button, Grommet } from 'grommet';


const Intro = () => {

    return (
    <Grommet theme={grommet}>
        <Box align="center" pad="">
        <Heading margin="none">
          Hello, I'm Aro
        </Heading>     
        <Heading margin="none">
          Frontend developer 
        </Heading>
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