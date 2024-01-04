import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo1, menu, close } from "../assets";
// import {logo_2} from "../assets/logo_2.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  // const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex justify-between items-center py-5 sticky top-0 z-20 transition-colors duration-300 ${scrolled ? "bg-primary text-secondary" : "bg-transparent text-white"}`}>
      <Link
        to='/'
        className='flex items-center gap-2'
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo1} alt='logo' className='w-16 h-10 object-contain' />
        <p className={`${scrolled ? 'text-secondary' : 'text-white'} text-[18px] font-bold cursor-pointer flex`}>
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
              active === nav.title ? "text-[#FF6E80] font-bold" : (scrolled ? "text-secondary" : "text-white")
            } hover:text-[#FF6E80] text-[18px] font-medium cursor-pointer transition-colors duration-300`}
            onClick={() => setActive(nav.title)
            }
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