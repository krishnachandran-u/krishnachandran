import './globals.css'; 

import ScreenSizeLogger from '@/components/ScreenSizeLogger';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Connect from '@/components/Connect';

import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  return (
    <>
        <ParticlesBackground />
        <Hero/>
        <About />
        <Projects />
        <Skills />
        <Connect />
    </>
  )
}


