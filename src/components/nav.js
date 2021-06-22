import React from 'react';
import { Nav, Anchor } from 'grommet';
import { Home, Notification, ChatOption } from 'grommet-icons'

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
    <Anchor icon={<Home />} hoverIndicator />
    <Anchor icon={<Notification />} hoverIndicator />
    <Anchor icon={<ChatOption />} hoverIndicator />
</Nav>
  )
}
export default Mynav;