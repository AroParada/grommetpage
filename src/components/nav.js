import React from 'react';
import { Nav, Anchor, Text } from 'grommet';
import { Mail, Github, Linkedin, DocumentPdf, } from 'grommet-icons'

function Mynav() {

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
    <Nav direction="row" background="brand" pad="medium">
    <Text color="white" alignSelf="center" size="xlarge" >
          Aro Parada
    </Text>
    <Anchor icon={<Github />} hoverIndicator />
    <Anchor icon={<Linkedin />} hoverIndicator />
    <Anchor icon={<DocumentPdf />} hoverIndicator />
    <Anchor icon={<Mail />} hoverIndicator />
    
</Nav>
  )
}
export default Mynav;