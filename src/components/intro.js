import React from 'react';
import { Paragraph, Box, Button, Grommet } from 'grommet';
import Typical from 'react-typical'

const Intro = () => {

    return (
    <Grommet >
        <Box align="center" pad="" background="light-4">
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
                "burger lover 🍔", 
                1000,
                ]}
              loop={Infinity}
              wrapper="h1"
            /> 
        <Paragraph textAlign="center" size="xlarge">
          Currently work on using programming languages to provide quality interactions
          between users and software programs. Passionate for learning
          linguistics and business which help problem solving and working with teams to create
          unique user experiences.
        </Paragraph>
          <Button primary label="Resume" href="https://docs.google.com/document/d/19dAEEabihDZaa6nlFYliqCUL_HK2jThcuAPnxInU194/edit?usp=sharing" id="shadow" target="_blank" rel="noopener" Download/> 
        </Box>
    </Grommet>
    )
}
export default Intro;