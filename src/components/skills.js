import React from "react";
import { Heading, Grommet } from "grommet";
import {
  Js,
  Reactjs,
  Node,
  Npm,
  Html5,
  Css3,
  Wordpress,
  Gremlin,
  Heroku,
  Mysql,
  PiedPiper,
} from "grommet-icons";
import AWS from "react-aws-icons/dist/aws/logo/AWS";

const Skills = () => {
  return (
    <Grommet>
      <Heading size="small" margin="medium">
        Programming Languages & Tools
      </Heading>
      <Html5 color="neutral-4" size="large" />
      <Css3 color="#0daeff" size="large" />
      <Js color="plain" size="large" />
      <Reactjs color="plain" size="large" />
      <Node color="plain" size="large" />
      <Npm color="plain" size="large" />
      <AWS size={53} />
      <Wordpress color="plain" size="large" />
      <Gremlin color="purple" size="large" />
      <Heroku color="plain" size="large" />
      <Mysql color="plain" size="large" />
      <PiedPiper color="plain" size="large" />
    </Grommet>
  );
};

export default Skills;
