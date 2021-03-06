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
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
  height: '100%',
  borderRadius: '13px',
  boxShadow: 3,
}));

function App() {

  const accentColor = "rgb(16, 17, 58)"

  return (
    <div className='resume'
      style={{
        // height: "3508px",
        // width: "2480px"
        width: '98%'
      }}
    >

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid item xs={12} >
            <Item
              style={{
                fontFamily: 'Roboto Serif',
                fontStyle: 'italic',
                fontSize: '14px',
                // marginTop: '10px',
                paddingTop: '10px',
                color: accentColor
              }}
              sx={{ boxShadow: 3, }}
            >
              I’m a computer geek who also happens to be a CSE UG
              student, I like to build cool projects which can solve
              some real life problem.
            </Item>
          </Grid>
          <br />
          <Grid item xs={12} >
            <Item
              sx={{ boxShadow: 3, }}
            >
              <Education accentColor={accentColor} />
            </Item>
          </Grid>

          <Grid item xs={12} style={{ marginTop: '5mm' }}>
            <Item
              sx={{ boxShadow: 3, }}
            >
              <Internship accentColor={accentColor} />
            </Item>
          </Grid>

          <Grid item xs={12} style={{ marginTop: '5mm' }}>
            <Item
              sx={{ boxShadow: 3, }}
            >
              <Project accentColor={accentColor} />
            </Item>
          </Grid>

        </Grid>
        <Grid item xs={4}>
          <Grid item xs={12} >
            <Item
              style={{
                backgroundColor: accentColor,
                boxShadow: 3,
              }}
              sx={{ boxShadow: 3, }}
            >
              <Contact accentColor={accentColor} />
              {/* Name & Contact */}
            </Item>
          </Grid>
          <br />
          <Grid item xs={12} >
            <Item
              style={{
                backgroundColor: accentColor,
              }}
              sx={{ boxShadow: 3, }}
            >
              <Skill accentColor={accentColor} />
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
