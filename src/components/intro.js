import React from 'react';

import { grommet, Box, Button, Grommet } from 'grommet';


const Intro = () => {

    return (
    <Grommet theme={grommet}>
       <Box align="center" pad="">
          <Button label="Anchor" href="#" />
        </Box>
    </Grommet>

    )
}
export default Intro;