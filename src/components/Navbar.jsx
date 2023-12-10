import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo_2, menu, close } from "../assets";
// import {logo_2} from "../assets/logo_2.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex justify-between items-center py-5 sticky top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
      <Link
        to='/'
        className='flex items-center gap-2'
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo_2} alt='logo' className='w-9 h-9 object-contain' />
        <p className='text-white text-[18px] font-bold cursor-pointer flex '>
          Mery &nbsp;
          <span className='sm:block hidden'> | Fullstack developer</span>
        </p>  
      </Link>

      <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => {
            return (
              <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
            )
          })}
        </ul>
    </nav>
  )
}

export default Navbar