import { NavLink } from 'react-router-dom';
import { navlinks } from '../assets/navlinks';

const Header = () => {
  return (
    <nav className="h-16 sm:h-24 w-full grid place-items-center relative shadow">
      <div className="flex gap-4 sm:gap-6 justify-center items-center">
        {navlinks.map((link, index) => {
          const { id, text, url } = link;
          return (
            <>
              <div className="w-14 sm:w-24 md:w-32 flex justify-center">
                <NavLink
                  key={id}
                  to={url}
                  className="capitalize relative text-black font-normal"
                >
                  {text}
                </NavLink>
              </div>
              {/* display a point (svg circle) between links (after every link except last one) */}
              {index < navlinks.length - 1 && (
                <span className="font-thin">|</span>
              )}
            </>
          );
        })}
      </div>
      {/* <div className="absolute bottom-0 w-1/2 h-[2px] bg-gradient-to-r from-white via-neutral-500 to-white"></div> */}
    </nav>
  );
};
export default Header;
