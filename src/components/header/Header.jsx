import { NavLink } from 'react-router-dom';
import { navlinks } from '../../assets/navlinks';
import BurgerMenu from './BurgerMenu';

import DropDownMenu from './DropDownMenu';

const Header = ({ isNavMenuOpen, setIsNavMenuOpen }) => {
  return (
    <header className="z-10">
      <div
        className={`top-0 h-16 sm:h-24 w-full flex items-center transition duration-500 hover:shadow bg-backgroundColor-primary ${
          isNavMenuOpen &&
          'bg-backgroundColor-secondary sm:bg-backgroundColor-primary'
        }`}
        // change bg color when navheader is open only for small screen
      >
        {/* SMALL SCREEN → BURGER MENU TO THE RIGHT */}
        <div className="flex sm:hidden w-full justify-end mr-6">
          <BurgerMenu
            isNavMenuOpen={isNavMenuOpen}
            setIsNavMenuOpen={setIsNavMenuOpen}
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
      {/* SMALL SCREEN → NAV HEADER DISPLAY WHEN isNavMenuOpen === true */}
      <div className="flex sm:hidden">
        <DropDownMenu
          isNavMenuOpen={isNavMenuOpen}
          setIsNavMenuOpen={setIsNavMenuOpen}
        />
      </div>
    </header>
  );
};
export default Header;
