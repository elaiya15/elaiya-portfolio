import React from 'react'
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import { Stack } from '@mui/system';

import "./Skills.css"
import html from './html5.png'
import css from './css.png'
import js from './js (Custom).png'
import react from './react.png'
import ex from './expess.png'
import api from './api.png'
import node from './node.png'
import mdb from './mongodb.png'
import mysql from './mysql.png'
import aws from './aws.png'

const Skills = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

  return (
    <>
    <Box className = "box" sx={{ width: '77.8%',ml:17.3,mt:5,}}>
      <Stack spacing={1}>
        <Item clasName="ttle">SKILLS</Item>
      </Stack>
    </Box>
   <div className ="app" >
   <img className ="img" src={html} alt={html}/>
   <img className ="img" src={css} alt={css}/>
   <img className ="img" src={js} alt={js}/>
   <div className ="image">
   <img className ="img1" src={react} alt={react}/>
   <img className ="img2" src={ex} alt={ex}/>
   <img className ="img3" src={api} alt={api}/>
   <img className ="img4" src={node} alt={node}/>
   <img className ="img5" src={mdb} alt={mdb}/>
   <img className ="img6" src={mysql} alt={mysql}/>
   <img className ="img7" src={aws} alt={aws}/>
   </div>
   
   </div>

 </>
  )
}

export default Skills
