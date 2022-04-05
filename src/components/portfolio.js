import React from "react";
import { Main, Heading, Box, Grommet } from "grommet";
import { RichFooter } from "./richfooter";

function Portfolio() {
  return (
    <Main background="light-6" elevation="large" pad="medium" gap="large">
      <Heading margin="none">Portfolio.</Heading>
      <RichFooter />
      <Box flex />
    </Main>
  );
}

export default Portfolio;
