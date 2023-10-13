/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { Typography, Link } from '@material-ui/core';
import {
  ResumeIcon
} from '../content/ResumeButton';
import  Skills from "../Skills/Skills";
import web from './web.png'
import git from './github1.png'
import git2 from './github2.png'
import './Works.css';

// Import ../../assets/recentprojects/
// import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Shopping from '../../assets/recentprojects/E-commers1.png';
import Inventory from '../../assets/recentprojects/inventre2.png';
import Job from '../../assets/recentprojects/job3.png';
import Dashboard from '../../assets/recentprojects/Dashboard.png';
// import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([

    { 
      id: 1,
      title: 'Shopping website', 
      description: `An E-commerce  project website built using
      MERN stack MogoDB ExpressJS ReactJS NodeJS. & Redux, Razorpay payment gateway`,
      alter: 'Shopping Project',
      image: `${Shopping}`,
      link:"https://e-commers-front-end.vercel.app/",
      github:"https://github.com/elaiya15/E-commers-front-end",
      backEnd:"https://github.com/elaiya15/e-commers-backend"
    },
    { 
      id: 2,
      title: 'Inventory management', 
      description: `Inventory/asset management website built using MERN stack 
      MogoDB Express.JS React.JS Node.JS. & Redux `,
      alter: 'Inventory Project',
      image: `${Inventory}`,
      link:"https://inventry-management-system.vercel.app/",
      github:"https://github.com/elaiya15/Inventry-management-system",
      backEnd:"https://github.com/elaiya15/job-backend"
    },
    { 
      id:3,
      title: 'Job Portal', 
      description: `Job search Portal it's  similar to  Naukri job search Portal. This  website built using
      MERN stack MogoDB ExpressJS ReactJS NodeJS. & Redux `,
      alter: 'Job Portal',
      image: `${Job}`,
      link:"https://job-app-two.vercel.app/",
      github:" https://github.com/elaiya15/job--app",
      backEnd:"https://github.com/elaiya15/job-backend"
    },
    { 
      id: 4,
      title: 'Dashboard', 
      description: `A Dashboard website is Normal html, css, js files. it has been modified to ReactJS`,
      alter: 'Dashboard Project',
      image: `${Dashboard}`,
      link:"https://resonant-semifreddo-f3e697.netlify.app/",
      github:"https://github.com/elaiya15/sb-admin",
    },
    
  ]);

  return (

    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
              <p className="description">
                <Link href= {`${project.link}`} target='_blank'><img className="web" src={web} alt={web}/>  View Demo</Link><br/><br/>
                <Link href= {`${project.github}`} target='_blank'><img className="web" src={git2} alt={git2}/>  Github Code </Link>
                
              </p>

            </div>
          </div>
        ))}
       
      </Container>
    </section>
  );
};
