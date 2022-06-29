import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './app.css'

import Education from './Education';
import Internship from './Internship';
import Project from './Project';
import Skill from './Skill';
import Contact from './Contact';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
}));

function App() {
  return (
    <div className='resume'
      style={{
        // height: "3508px",
        // width: "2480px"
        width: '98%'
      }}
    >

      {/* <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            Adarsh Kumar Singh
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            I’m a computer geek who also happens to be a CSE UG
            student, I like to build cool projects which can solve
            some real life problem.
          </Item>
        </Grid>
      </Grid>
      <br /> */}
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid item xs={12} >
            <Item>
              I’m a computer geek who also happens to be a CSE UG
              student, I like to build cool projects which can solve
              some real life problem.
            </Item>
          </Grid>
          <br />
          <Grid item xs={12} >
            <Item>
              <Education />
              <br />
              <Internship />
              <br />
              <Project />
            </Item>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          {/* <br /> */}
          <Grid item xs={12} >
            <Item>
              Adarsh Kumar Singh
            </Item>
          </Grid>
          <br />
          <Grid item xs={12} >
            <Item>
              <Contact />
            </Item>
          </Grid>
          <br />
          <Grid item xs={12} >
            <Item>
              <Skill />
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
