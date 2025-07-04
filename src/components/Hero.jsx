import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { words } from "../constants";

const Hero = () => {
    useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",

      // from
      {
        y: 50,
        opacity: 0,
      },
      // to
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
      }
    );
  });
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Ameen</span>
          </h1>
          <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2
                        p-1 rounded-full bg-white-100"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that deliver results</h1>
            </div>
             <p className="text-white-50 mt-3 md:text-lg relative z-10 max-w-[500px] text-wrap pointer-events-none">
              a passionate developer , who loves turning
              ideas into impactful digital experiences.
            </p>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          
          I specialize in crafting compelling user interfaces and <br className="sm:block hidden" />designing impactful web applications. 
          </p> */}
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
