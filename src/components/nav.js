import React from 'react';
import { Nav, Anchor, Text, ResponsiveContext, Header, Box, Menu } from 'grommet';
import { Home, Mail, Github, Linkedin, DocumentPdf, } from 'grommet-icons'

const Mynav = () => {

  // const theme = {
  //   global: {
  //     colors: {
  //       brand: '#00739D',
  //     },
  //     font: {
  //       family: 'Roboto',
  //       size: '18px',
  //       height: '20px',
  //     },
  //   },
  // };

  return (
<Header background="brand" pad="medium">
      <Box direction="row" align="center" gap="small">
        <Text color="white" alignSelf="center" size="xlarge" >
           Aro Parada
        </Text>
      </Box>
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === 'small' ? (
            <Menu
              label=""
              items={[
                { icon: <Home />, onClick: () => {} },
                { icon: <Linkedin />, onClick: () => {} },
                { icon: <DocumentPdf />, onClick: () => {} },
                { icon: <Mail />, onClick: () => {} },
                { label: 'Portfolio', onClick: () => {} },
              ]}
            />
          ) : (
  <Nav direction="row" background="brand" pad="medium">
    <Anchor icon={<Github />} hoverIndicator />
    <Anchor icon={<Linkedin />} hoverIndicator />
    <Anchor icon={<DocumentPdf />} hoverIndicator />
    <Anchor icon={<Mail />} hoverIndicator />  
  </Nav>
      )
    }
  </ResponsiveContext.Consumer>
</Header>
  )
}
export default Mynav;