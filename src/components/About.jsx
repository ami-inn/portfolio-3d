import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import AnimatedCounter from "./AnimatedCounter";

const About = () => {
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />

            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };

  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        I am a proficient software developer with extensive experience in
        JavaScript, along with expertise in frameworks like React and Node.js.
        Additionally, I have a basic understanding of Three.js. My skill set
        also encompasses MongoDB, Node, Socket.io, Bootstrap, and HTML. I am
        enthusiastic about bringing your ideas to fruition. Furthermore, I pride
        myself on being a self-learner, enabling me to quickly adapt to new
        technologies and concepts. Let's team up to turn your visions into
        reality!
      </motion.p>

      <p className={`${styles.sectionSubText} mt-16 mb-3`}>Services</p>
      <div className=" flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <AnimatedCounter />

    </>
  );
};

export default SectionWrapper(About, "about");
