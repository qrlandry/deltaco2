import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { Link } from "react-scroll";

const Nav = () => {
  const smallScreen = useMediaQuery({ maxWidth: 1020 });
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Menu",
    },
    {
      id: 3,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-red-700 bg-white fixed z-20">
      <div>
        <h1 className="lg:text-5xl sm:text-xl md:text-3xl ml-2"> Delves Taco Hershey </h1>
        <p className="text-sm sm:text-xs ml-2"> 121 Towne Square Drive, Hershey PA 17033 </p>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitilize hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-red-300 to-gray-400">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {" "}
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>{" "}
            </li>
          ))}
        </ul>
      )}

      <div className="hidden lg:flex fixed felx-col top-[35%] left-0">
        <ul>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gradient-to-r from-[#405DE6] 
            via-[#5851DB] via-[#833AB4] via-[#C13584] via-[#E1306C] via-[#FD1D1D] via-[#F56040] via-[#F77737] via-[#FCA545] to-[#FFDC80]"
          >
            <a
              className="flex justify-between items-center w-full text-white text-sm"
              target="_blank"
              href="https://www.instagram.com/deltacohershey/?igshid=MzMyNGUyNmU2YQ%3D%3D"
            >
              Instagram{" "}
              <div className="pr-4">
                <AiFillInstagram size={30} />
              </div>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-white text-sm"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61553888651454"
            >
              Facebook{" "}
              <div className="pr-4">
                <AiFillFacebook size={30} />
              </div>
            </a>
          </li>
        </ul>
      </div>

      {smallScreen && (
        <div className="sm:flex fixed felx-col top-[35%] left-0">
          <ul>
            <li
              className="w-[120px] h-[40px] flex justify-between items-center ml-[-80px] hover:ml-[0px] duration-300 bg-gradient-to-r from-[#405DE6] 
            via-[#5851DB] via-[#833AB4] via-[#C13584] via-[#E1306C] via-[#FD1D1D] via-[#F56040] via-[#F77737] via-[#FCA545] to-[#FFDC80]"
            >
              <a
                className="flex justify-between items-center w-full text-white text-[10px]"
                target="_blank"
                href="https://www.instagram.com/deltacohershey/?igshid=MzMyNGUyNmU2YQ%3D%3D"
              >
                Instagram{" "}
                <div className="pr-3">
                  <AiFillInstagram size={20} />
                </div>
              </a>
            </li>
            <li className="w-[120px] h-[40px] flex justify-between items-center ml-[-80px] hover:ml-[0px] duration-300 bg-blue-600">
              <a
                className="flex justify-between items-center w-full text-white text-xs"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61553888651454"
              >
                Facebook{" "}
                <div className="pr-3">
                  <AiFillFacebook size={20} />
                </div>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
