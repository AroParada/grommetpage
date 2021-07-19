import React from 'react';

import {
  Anchor,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Collapsible,
  Heading,
  Grommet,
  Image,
  Paragraph,
} from 'grommet';

import cryptopic from '../assets/Screenshot (189).png';
import { FormDown, FormUp, Link, Github } from 'grommet-icons';



export const RichFooter = () => {

  const data = [
    {
      Image: <Image fit="cover" src={cryptopic} a11yTitle="bridge"/>,
      github: <Anchor href="https://github.com/jamescbaldwin/react-finance/tree/aro" target="_blank" rel="noopener" color="plain" icon={<Github />} hoverIndicator />,
      link: <Anchor href="https://stark-tor-31756.herokuapp.com/" target="_blank" rel="noopener" color="plain" icon={<Link />} hoverIndicator />,
      title: 'Crypto Tracker',
      summary: 'Team built application that provides a dashboard to track crypto coins that users follow',
      info: 'Role: Front and back-end for user login/signup. Developed with React, MongoDB, Passport and Google authentication to login users to the site.',
    },
    // {
    //   color: 'green',
    //   icon: <System size="large" />,
    //   title: 'System',
    //   subTitle: 'Sub-system and Devices',
    //   message: 'Composable System',
    // },
  ];


  const [open, setOpen] = React.useState(false);

  const ExpandButton = ({ ...rest }) => {
    const Icon = open ? FormUp : FormDown;
    return (
      <Button
        label="Info"
        hoverIndicator="light-4"
        icon={<Icon color="brand" />}
        {...rest}
      />
    );
  };
  return (
    <Grommet >
      <Box pad="medium" align="start">
      {data.map(value => (  
        <Card class="column" elevation="large" width="medium">
          <CardBody height="small">
            {value.Image}
          </CardBody>
          <Box pad={{ horizontal: 'medium' }} responsive={false}>
            <Heading level="3" margin={{ vertical: 'medium' }}>
              {value.title}
            </Heading>
            <Paragraph margin={{ top: 'none' }}>
              {value.summary}
            </Paragraph>
          </Box>
          <CardFooter>
            <Box direction="row" align="center" gap="small">
              {value.link}
              {value.github}
            </Box>
            <ExpandButton onClick={() => setOpen(!open)} />
          </CardFooter>
          <Collapsible open={open}>
            <Paragraph margin="medium" color="dark-3">
              {value.info}
            </Paragraph>
          </Collapsible>
        </Card>
        ))}
      </Box>
    </Grommet>
  );
};

RichFooter.storyName = 'Rich footer';

export default {
  title: `Layout/Card/Rich footer`,
};