import React from 'react';
import { Paragraph, grommet, Box, Button, Grommet } from 'grommet';
import Typical from 'react-typical'
import { Pause } from 'grommet-icons';


const Intro = () => {

    return (
    <Grommet theme={grommet}>
        <Box align="center" pad="" background="light-3">
        <Typical
              text-align="center"
              align="center"
              steps={[
                "",
                1200 ,
                "Web Developer💻",
                2000 ,
                "musician 🎸",
                1000 ,
                "history nerd 📚",
                1000,
                "food lover 🍔", 
                1000,
                ]}
              loop={Infinity}
              wrapper="h1"
            /> 
        <Paragraph margin="none">
           Lorem ipsum dolor sit amet,
           consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua.
        </Paragraph>
          <Button label="Portfolio" href="http://aroparada.com/" target="_blank" rel="noopener" id="shadow"/>         
        </Box>
    </Grommet>

    )
}
export default Intro;