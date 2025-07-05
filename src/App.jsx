import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works, 
  StarsCanvas,
} from "./components";
import ExperienceTwo from "./components/ExperienceTwo";
import LogoSection from "./components/LogoSection";
console.log("App component loaded");
const App = () => {
  return (
     <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover mb-28 bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <ExperienceTwo/>
        <LogoSection/>
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
