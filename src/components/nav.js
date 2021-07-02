import React from 'react';
import { Nav, Anchor, ResponsiveContext, Header, Box, Menu  } from 'grommet';
import { Home, Mail, Github, Linkedin, Document, } from 'grommet-icons'


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
                { icon: <Linkedin />,  onClick: () => {} },
                { icon: <Document />, onClick: () => {} },
                { icon: <Mail />, onClick: () => {} },
                { label: 'Portfolio', onClick: () => {} },
              ]}
            />
          ) : (
  <Nav direction="row" background="brand" pad="medium">
    <Anchor href="https://github.com/AroParada" target="_blank" rel="noopener" color="white" icon={<Github />} hoverIndicator />
    <Anchor href="https://www.linkedin.com/in/aroparada/" target="_blank" rel="noopener" color="white" icon={<Linkedin />} hoverIndicator />
    <Anchor href="https://docs.google.com/document/d/1l06xJZy6D-Al2WfnS_L7EUHIKqe6uNgEFbXbi7-FlzU/edit?usp=sharing" target="_blank" rel="noopener" color="white" icon={<Document />} hoverIndicator />
    <Anchor href="mailto:haroldparada20@gmail.com" color="white" icon={<Mail />} hoverIndicator />  
  </Nav>
      )
    }
  </ResponsiveContext.Consumer>
</Header>
  )
}
export default Mynav;