import React from 'react';
import { Text, Paragraph, Box, Button, Grommet } from 'grommet';
import Typical from 'react-typical'

const Intro = () => {

    return (
    <Grommet >
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
        <Paragraph textAlign="center" size="xlarge">
          Currently working on using programming languages to provide quality interactions
          between users and websites/software programs. Coming from a background of learning
          linguistics and business which help problem solving and working with teams to create
          unique user experiences.
        </Paragraph>
          <Button label="Portfolio" href="/Portfolio" id="shadow"/>         
        </Box>
    </Grommet>

    )
}
export default Intro;

{/* <WorldMap size="small"
               color="dark-6"
               continents={[
                 {
                   name: 'North America',
                   color: 'neutral-1',
                   onClick: (name) => {},
                 },
               ]}
               onSelectPlace={(lat, lon) => {}}
               places={[
                 {
                   name: 'Raleigh',
                   location: [35.884766, -78.625053],
                   color: 'accent-2',
                   onClick: (name) => {},
                 },
               ]}
               selectColor="accent-2"
             /> */}