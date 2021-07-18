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

import { FormDown, FormUp, Link, Github } from 'grommet-icons';


export const RichFooter = () => {
  const [open, setOpen] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);

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
        <Card class="column" elevation="large" width="medium">
          <CardBody height="small">
            <Image
              fit="cover"
              src="//v2.grommet.io/assets/IMG_4245.jpg"
              a11yTitle="bridge"
            />
          </CardBody>
          <Box pad={{ horizontal: 'medium' }} responsive={false}>
            <Heading level="3" margin={{ vertical: 'medium' }}>
              Crypto Tracker
            </Heading>
            <Paragraph margin={{ top: 'none' }}>
              A structure carrying a road, path, railroad, or canal across a
              river, ravine, road, railroad, or other obstacle.
            </Paragraph>
          </Box>
          <CardFooter>
            <Box direction="row" align="center" gap="small">
              <Button
                icon={<Link />}
                hoverIndicator
              />
              <Button icon={<Github color="plain" />} hoverIndicator />
            </Box>
            <ExpandButton onClick={() => setOpen(!open)} />
          </CardFooter>
          <Collapsible open={open}>
            <Paragraph margin="medium" color="dark-3">
              The greatest bridge builders of antiquity were the ancient Romans.
              The Romans built arch bridges and aqueducts that could stand in
              conditions that would damage or destroy earlier designs. Some
              stand today.
            </Paragraph>
          </Collapsible>
        </Card>
        <Card class="column" elevation="large" width="medium">
          <CardBody height="small">
            <Image
              fit="cover"
              src="//v2.grommet.io/assets/IMG_4245.jpg"
              a11yTitle="bridge"
            />
          </CardBody>
          <Box pad={{ horizontal: 'medium' }} responsive={false}>
            <Heading level="3" margin={{ vertical: 'medium' }}>
              Crypto Tracker
            </Heading>
            <Paragraph margin={{ top: 'none' }}>
              A structure carrying a road, path, railroad, or canal across a
              river, ravine, road, railroad, or other obstacle.
            </Paragraph>
          </Box>
          <CardFooter>
            <Box direction="row" align="center" gap="small">
              <Button
                icon={<Link />}
                hoverIndicator
              />
              <Button icon={<Github color="plain" />} hoverIndicator />
            </Box>
            <ExpandButton onClick={() => setOpen(!open)} />
          </CardFooter>
          <Collapsible open={open}>
            <Paragraph margin="medium" color="dark-3">
              The greatest bridge builders of antiquity were the ancient Romans.
              The Romans built arch bridges and aqueducts that could stand in
              conditions that would damage or destroy earlier designs. Some
              stand today.
            </Paragraph>
          </Collapsible>
        </Card>
      </Box>
    </Grommet>
  );
};

RichFooter.storyName = 'Rich footer';

export default {
  title: `Layout/Card/Rich footer`,
};