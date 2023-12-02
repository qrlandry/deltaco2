import React from "react";
import DelLogo from "../assets/Dog-Sombrero.jpg";
import DelBackground from "../assets/xtaco_pattern.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="Home" className="h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-red-500 to-white z-0"></div>
      <div className="absolute top-0 left-0 w-full h-3/5">
        <img
          src={DelBackground}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-1/2 flex flex-col justify-center items-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ top: '250px' }}>
        <div className="rounded-full overflow-hidden w-32 h-32 md:w-45 md:h-45 lg:w-46 lg:h-46 mb-4" >
          <img
            src={DelLogo}
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-center sm:text-2xl md:text-4xl lg:text-5xl font-bold">
          SPICING UP HERSHEY, ONE TACO AT A TIME!
        </h2>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white">
        <Link
          to="Menu"
          smooth
          duration={500}
          className="group rounded-lg cursor-pointer text-white border border-white px-6 py-3 my-2 flex items-center hover:bg-[#e7af00] hover:border-[#e7af00]"
        >
          View Menu
          <span className="group-hover:rotate-90 duration-300">
            <MdOutlineKeyboardArrowRight size={35} className="ml-3" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;