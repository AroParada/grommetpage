import React from "react";
import { Main, Heading, Box, Grommet } from "grommet";
import { RichFooter } from "../components/richfooter";

import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

function Portfolio() {
  const customBreakpoints = deepMerge(grommet, {
    global: {
      breakpoints: {
        small: {
          value: 600,
        },
        medium: {
          value: 3000,
        },
        large: {
          value: 4000,
        },
      },
      colors: {
        brand: "#00739D",
      },
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px",
      },
    },
  });

  return (
    <Grommet theme={customBreakpoints} full>
      <Main background="light-6" elevation="large" pad="medium" gap="large">
        <Heading margin="none">Portfolio.</Heading>
        <RichFooter />
        <Box flex />
      </Main>
    </Grommet>
  );
}

export default Portfolio;
