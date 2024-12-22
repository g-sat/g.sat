import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Gallery />
    </>
  );
}

export default Home;