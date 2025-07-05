import { socialImgs } from "../constants";


const Footer = () => {
  return (
    <footer className=" md:mt-20 mt-10 text-white-50   px-5 md:px-20 xl:px-20 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 w-full mb-16">
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-start cursor-pointer">Terms & Conditions</p>
        </div>
        <div className="flex items-center justify-center gap-5">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="border border-black-50 bg-primary flex justify-center items-center rounded-xl size-10 md:size-12 cursor-pointer transition-all duration-500 hover:bg-black-100">
              <img src={socialImg.imgPath} alt="social icon" className="inline-block" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Ami-inn . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;