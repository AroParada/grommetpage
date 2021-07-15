import React, { useState } from "react";
import { Heading, Box, Grid, Grommet, ResponsiveContext, } from 'grommet';
import MyCard from '../components/card'
import Mynav from "../components/nav";
import Intro from '../components/intro'
import SimpleFooter from '../components/footer';
import Skills from '../components/skills'

import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';

function Home() {

  // set custom breakpoints so we can see the changes
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
          brand: '#00739D',
        },
        font: {
          family: 'Roboto',
          size: '18px',
          height: '20px',
        },
    },
  });

  // columns, rows and areas are for Grid with a known number of contents / boxes.

// If the size is small, we only see 1 column
// If the size is medium, we only see 2 columns
// If the size is either large or xlarge, we see 3 columns
const columns = {
  small: ['auto'],
  medium: ['auto', 'auto'],
  large: ['auto', 'auto', 'auto'],
  xlarge: ['auto', 'auto', 'auto'],
};

// If the size is small, we have 3 rows
// If the size is medium, we have 2 rows
// If the size is large or xlarge, we have 1 row
const rows = {
  small: ['large', 'large', 'large'],
  medium: ['large', 'large'],
  large: ['large'],
  xlarge: ['large'],
};

  // Set the different areas you need for every size
const fixedGridAreas = {
  small: [
    { name: 'header', start: [0, 0], end: [0, 0] },
    { name: 'test', start: [0, 1], end: [0, 1] },
    { name: 'test1', start: [0, 2], end: [0, 2] },
  ],
  medium: [
    { name: 'header', start: [0, 0], end: [0, 0] },
    { name: 'test', start: [1, 0], end: [1, 0] },
    { name: 'test1', start: [0, 1], end: [1, 1] },
  ],
  large: [
    { name: 'header', start: [0, 0], end: [0, 0] },
    { name: 'test', start: [1, 0], end: [1, 0] },
    { name: 'test1', start: [2, 0], end: [2, 0] },
  ],
};

const Responsive = ({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) => (
  <ResponsiveContext.Consumer>
    {size => {
      // Take into consideration if not array is sent but a simple string
      let columnsVal = columns;
      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size];
        }
      }

      let rowsVal = rows;
      if (rows) {
        if (rows[size]) {
          rowsVal = rows[size];
        }
      }

      // Also if areas is a simple array not an object of arrays for
      // different sizes
      let areasVal = areas;
      if (areas && !Array.isArray(areas)) areasVal = areas[size];

      return (
        <Grid
          {...props}
          areas={!areasVal ? undefined : areasVal}
          rows={!rowsVal ? size : rowsVal}
          columns={!columnsVal ? size : columnsVal}
        >
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);
   
  return (
  <Grommet theme={customBreakpoints} full>
  <Mynav/>
   <Box>
      <Responsive
        rows={rows}
        columns={columns}
        gap=""
        areas={fixedGridAreas}
        margin=""
      >
        <Box
          gridArea="header"
          background="light-3"
          justify="center"
          align="center"
        >
      <Heading margin="medium">Welcome.</Heading>
  <MyCard/>
          <strong></strong>
        </Box>
        <Box
          gridArea="test"
          background="light-3"
          justify="center"
          align="center"
        >
        <Intro/>
        </Box>
        <Box
          gridArea="test1"
          background="light-3"
          justify="center"
          align="center"
        >
        <Skills/>
          <strong></strong>
        </Box>
      </Responsive>
    </Box>
  <SimpleFooter/>
  </Grommet>
  );
}

export default Home;
