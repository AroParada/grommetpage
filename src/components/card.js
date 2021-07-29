import React from 'react';
import { Box, Avatar, Button, Card, CardHeader, CardBody, CardFooter } from 'grommet';
import { Code } from 'grommet-icons'
import Typical from 'react-typical'


function Mycard() {
  return (
    <Card margin="small" height="medium" width="medium" background="light-1" align="center">
          <CardHeader pad="medium"></CardHeader>
          <CardBody 
            pad="medium">
            <Box justify="center" direction="row" gap="small">
            <Avatar size="xlarge" src="https://live.staticflickr.com/65535/51322007907_3770d31af0_b.jpg" />    
            </Box>
            <Typical
              text-align="center"
              align="center"
              steps={["Hello, I'm Aro", 1000 ,]}
              loop={3}
              wrapper="h1"
            /> 
             <Button
          icon={<Code size="large" color="brand" />}
          alignSelf="center"
        />
          </CardBody>
          <CardFooter pad={{horizontal: "small"}} background="light-2">   
        </CardFooter>
    </Card>
  )
}
export default Mycard;