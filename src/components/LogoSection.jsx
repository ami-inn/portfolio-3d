/* eslint-disable react/prop-types */

import { Building } from "lucide-react";
import { companies, logoIconsList } from "../constants";
import { styles } from "../styles";




const LogoIcom = ({ logo }) => {
  return (
    <div className="flex-none flex-center marquee-item">
    
      <h3 className={styles.heroSubText}>{logo.name}</h3>
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {companies.map((name, index) => (
            <LogoIcom key={index} logo={name} />
          ))}
            {companies.map((logo, index) => (
            <LogoIcom key={index} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
