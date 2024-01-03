import './globals.css'; 

import ScreenSizeLogger from '@/components/ScreenSizeLogger';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div id = "particles-js">
      <Hero/>
      <About />
      <Projects />
    </div>
  )
}


