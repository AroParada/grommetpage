import React from 'react';
import { Box, Avatar, Button, Card, CardHeader, CardBody, CardFooter } from 'grommet';
import { Favorite, ShareOption } from 'grommet-icons'
import Typical from 'react-typical'

function Mycard() {

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
    <Card height="medium" width="medium" background="light-1" align="center">
          <CardHeader pad="medium">Header</CardHeader>
          <CardBody 
            pad="medium">Body
            <Box justify="center" direction="row" gap="small">
            <Avatar size="xlarge" src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />    
            </Box>
            <Typical
              text-align="center"
              align="center"
              steps={["Hello, I'm Aro", 1000 ,]}
              loop={3}
              wrapper="h1"
            /> 
          </CardBody>
          <CardFooter pad={{horizontal: "small"}} background="light-2">   
          <Button
          icon={<Favorite color="red" />}
          hoverIndicator
        />
        <Button icon={<ShareOption color="plain" />} hoverIndicator />
        </CardFooter>
    </Card>
  )
}
export default Mycard;