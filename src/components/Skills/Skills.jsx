// import React from 'react'
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
// import { Stack } from '@mui/system';

import "./Skills.css"
// import SkillImage from './Img'
import  html    from   '/SkillsImg/1.png'
import  css     from   '/SkillsImg/2.png'
import   js     from   '/SkillsImg/3.png'
import  react   from   '/SkillsImg/4.png'
import redux    from   '/SkillsImg/5.png'
import node     from   '/SkillsImg/6.png'
import  express from   '/SkillsImg/7.png'
import  api     from   '/SkillsImg/8.png' 
import   mysql  from   '/SkillsImg/9.png'
import  mongodb from   '/SkillsImg/10.png'
import aws      from   '/SkillsImg/11.png'

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
   
   <div className ="app" >
   <Box className = "box" sx={{ width: '100%'}}>
        <Item clasName="ttle">SKILLS</Item>
    </Box>
 <div className ="imagecontiner">
   
 <span className ="image" >
   <img className ="html"  src={html} alt="sill"/>
   <h3></h3>
   </span>
 <span className ="image" >
   <img className ="css"  src={css} alt="sill"/>
   <h3></h3>
   </span>
 <span className ="image" >
   <img className ="js"  src={js} alt="sill"/>
   <h3></h3>
   </span>
 <span className ="image" >
   <img className ="react"  src={react} alt="sill"/>
   <h3></h3>
   </span>
 <span className ="image" >
   <img className ="redux"  src={redux} alt="sill"/>
   <h3></h3>
   </span>
 <span className ="image" >
   <img className ="node"  src={node} alt="sill"/>
   <h3></h3>
   </span>
 <span className ="image" >
   <img className ="express"  src={express} alt="sill"/>
   <h3></h3>
   </span>
 <span className ="image" >
   <img className ="api"  src={api} alt="sill"/>
   <h3></h3>
   </span>
 <span className ="image" >
   <img className ="mysql"  src={mysql} alt="sill"/>
   <h3></h3>
   </span>
 <span className ="image" >
   <img className ="mongodb"  src={mongodb} alt="sill"/>
   <h3></h3>
   </span>
 <span className ="image" >
   <img className ="aws"  src={aws} alt="sill"/>
   <h3></h3>
   </span>
   
   </div>
   </div>

 </>
  )
}

export default Skills
