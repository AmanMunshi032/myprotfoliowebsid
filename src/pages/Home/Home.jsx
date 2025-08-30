import React from 'react';
import Hero from './Hero';
import About from './About';
import Skile from './Skile';
import Project from './Project';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
          <Hero></Hero>
          <About></About>
          <Skile></Skile>
          <Project></Project>
          <Contact></Contact>
        </div>
    );
};

export default Home;