import React from 'react';
import { Paragraph, grommet, Box, Button, Grommet } from 'grommet';


const Intro = () => {

    return (
    <Grommet theme={grommet}>
        <Box align="center" pad="">
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