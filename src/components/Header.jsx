import { NavLink } from 'react-router-dom';
import { navlinks } from '../assets/navlinks';
import BurgerMenu from './header/BurgerMenu';

const Header = () => {
  return (
    <nav className="top-0 shadow h-16 sm:h-24 w-full">
      <div className="hidden sm:grid  place-items-center relative ">
        <div className="flex justify-center items-center">
          {navlinks.map((link, index) => {
            const { id, text, url } = link;
            return (
              <div key={id}>
                <div className=" flex justify-center items-center gap-4">
                  <div className="grid place-items-center">
                    <NavLink
                      to={url}
                      className="capitalize relative text-black font-normal"
                    >
                      {text}
                    </NavLink>
                  </div>
                  {/* display a | between links (after every link except last one) */}
                  {index < navlinks.length - 1 && (
                    <span className="font-thin mr-4">|</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="absolute bottom-0 w-1/2 h-[2px] bg-gradient-to-r from-white via-neutral-500 to-white"></div> */}
      </div>
      <BurgerMenu />
    </nav>
  );
};
export default Header;
