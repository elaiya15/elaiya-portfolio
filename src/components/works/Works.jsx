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
import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
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
      title: 'React Portfolio', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
      link:" "
    },
    { 
      id: 2,
      title: 'Shopping website', 
      description: `An E-commerce  project website built using
      MERN stack MogoDB ExpressJS ReactJS NodeJS.`,
      alter: 'VeriTru Project',
      image: `${Veritru}`,
      link:"https://resilient-baklava-632d82.netlify.app"
    },
    { 
      id: 3,
      title: 'Inventory management', 
      description: `Inventory/asset management website built using MERN stack
      MogoDB ExpressJS ReactJS NodeJS .`,
      alter: 'LoFo Project',
      image: `${Lofo}`,
      link:"https://caption-frontend.vercel.app/"
    },
    { 
      id: 4,
      title: 'User Data', 
      description: `A website portfolio project for the Startup Dev Team
      built using MERN stack to demonstrate the CRUD capabilities of the tech stack.`,
      alter: 'Startup Project',
      image: `${Startup}`,
      link:"https://serene-alfajores-2ed378.netlify.app"
    },
    // { 
      // id: 5,
      // title: 'LaCalle Cafe', 
      // description: `A website project for the La Calle Cafe business
      // built using Wordpress and PHP with integrated SEO tools to help
      // the business ramp up its prospects and lead generation.`,
      // alter: 'Startup Project',
      // image: `${Lacalle}`,
    // },
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
                <Link href= {`${project.link}`} target='_blank'><img className="web" src={web} alt={web}/></Link>{ }
              </p>

            </div>
          </div>
        ))}
        {/* <Skills/> */}
  
      </Container>
    </section>
  );
};
