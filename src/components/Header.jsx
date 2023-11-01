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
            {navlinks.map((link) => {
              const { id, text, url } = link;
              return (
                <NavLink
                  key={id}
                  to={url}
                  className="capitalize relative font-normal"
                >
                  {text}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>
      {/* SMALL SCREEN → NAV HEADER DISPLAY WHEN isNavHeaderOpen === true */}
      <div className="flex sm:hidden">
        <NavHeader
          isNavHeaderOpen={isNavHeaderOpen}
          setIsNavHeaderOpen={setIsNavHeaderOpen}
        />
      </div>
    </div>
  );
};
export default Header;
