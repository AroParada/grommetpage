import React from 'react';
import { Nav, Anchor, ResponsiveContext, Header, Box, Menu  } from 'grommet';
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
<Header background="brand" pad="x-small">
      <Box direction="row" align="center" gap="small">
        <Anchor color="white" alignSelf="center" size="xlarge" label="A" margin="medium" weight="" >  
        </Anchor>
      </Box>
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === 'small' ? (
            <Menu
              size="medium"
              dropBackground="brand"
              justifyContent="center"
              items=
              {[
                { icon: <Home />, onClick: () => {} },
                { icon: <Linkedin />, onClick: () => {} },
                { icon: <DocumentPdf />, onClick: () => {} },
                { icon: <Mail />, onClick: () => {} },
                { label: 'Portfolio', onClick: () => {} },
              ]}
            />
          ) : (
  <Nav direction="row" background="brand" pad="medium">
    <Anchor color="white" icon={<Github />} hoverIndicator />
    <Anchor color="white" icon={<Linkedin />} hoverIndicator />
    <Anchor color="white" icon={<DocumentPdf />} hoverIndicator />
    <Anchor color="white" icon={<Mail />} hoverIndicator />  
  </Nav>
      )
    }
  </ResponsiveContext.Consumer>
</Header>
  )
}
export default Mynav;