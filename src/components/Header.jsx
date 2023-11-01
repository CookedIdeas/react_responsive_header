import { NavLink } from 'react-router-dom';
import { navlinks } from '../assets/navlinks';
import BurgerMenu from './header/BurgerMenu';
import { useState } from 'react';
import NavHeader from './header/NavHeader';

const Header = () => {
  const [isNavHeaderOpen, setIsNavHeaderOpen] = useState(false);

  const toggleNavHeader = (openIt) => {
    openIt ? setIsNavHeaderOpen(true) : setIsNavHeaderOpen(false);
  };

  return (
    <div>
      <div className="top-0 h-16 sm:h-24 w-full flex items-center transition duration-300 hover:shadow">
        {/* SMALL SCREEN → BURGER MENU TO THE RIGHT */}
        <div className="flex sm:hidden w-full justify-end mr-6">
          <BurgerMenu
            isNavHeaderOpen={isNavHeaderOpen}
            setIsNavHeaderOpen={setIsNavHeaderOpen}
          />
        </div>
        {/* LARGE SCREEN → NAVIGATION LINKS DISPLAYED AT CENTER */}
        <div className="hidden sm:grid w-full place-items-center relative ">
          <nav className="flex justify-around items-center w-1/2">
            {navlinks.map((link, index) => {
              const { id, text, url } = link;
              return (
                <NavLink
                  key={id}
                  to={url}
                  className="capitalize relative font-normal"
                >
                  {text}
                </NavLink>
                // <div
                //   key={id}
                //   className=" flex justify-center items-center gap-[1%]"
                // >

                //   {/* <div className="grid place-items-center"> */}
                //  {/* </div> */}
                //  {/* display a | between links (after every link except last one) */}
                //  {/* {index < navlinks.length - 1 && (
                //      <span className="font-thin mr-[5%] text-accent">|</span>
                //   )} */}
                // </div>
              );
            })}
          </nav>
          {/* <div className="absolute bottom-0 w-1/2 h-[2px] bg-gradient-to-r from-white via-neutral-500 to-white"></div> */}
        </div>
      </div>
      {/* SMALL SCREEN → NAV HEADER DISPLAY WHEN isNavHeaderOpen === true */}
      <div className="flex sm:hidden">
        <NavHeader isNavHeaderOpen={isNavHeaderOpen} />
      </div>
    </div>
  );
};
export default Header;
