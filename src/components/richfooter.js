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
import angelpic from '../assets/Screenshot (130).png'
import eatingpic from '../assets/Screenshot (53).png'
import directorypic from '../assets/Screenshot (151).png'
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
    {
      Image: <Image fit="cover" src={directorypic} a11yTitle="bridge"/>,
      github: <Anchor href="https://github.com/AroParada/employeedirectory" target="_blank" rel="noopener" color="plain" icon={<Github />} hoverIndicator />,
      link: <Anchor href="https://aroparada.github.io/employeedirectory/" target="_blank" rel="noopener" color="plain" icon={<Link />} hoverIndicator />,
      title: 'React User Directory ',
      summary: 'An employee directory that allows the user to filter list by last name or search box',
      info: 'Role: Sole author developed with React components, manages component state, and responds to user events.',
    },
    {
      Image: <Image fit="cover" src={angelpic} a11yTitle="bridge"/>,
      github: <Anchor href="https://github.com/AroParada/diosdadoProductions" target="_blank" rel="noopener" color="plain" icon={<Github />} hoverIndicator />,
      link: <Anchor href="https://www.diosdadophotography.com/" target="_blank" rel="noopener" color="plain" icon={<Link />} hoverIndicator />,
      title: 'Diosdado Productions ',
      summary: 'A simple design focused portfolio and contact site for local Raleigh photographer Angel Diosdado',
      info: 'Role: Sole author. Made with simple Html, CSS, and Javascript',
    },
    {
      Image: <Image fit="cover" src={eatingpic} a11yTitle="bridge"/>,
      github: <Anchor href="https://github.com/nihalwill/EatingHour" target="_blank" rel="noopener" color="plain" icon={<Github />} hoverIndicator />,
      link: <Anchor href="https://nihalwill.github.io/EatingHour/" target="_blank" rel="noopener" color="plain" icon={<Link />} hoverIndicator />,
      title: 'The Eating Hour ',
      summary: 'Team built application allows a user to easily query their favorite meals and beverages.',
      info: 'Uses Server-side APIs, The Meal db, The Cocktail db,and Materialize.',
    },
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