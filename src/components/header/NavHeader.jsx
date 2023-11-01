import { NavLink } from 'react-router-dom';
import { navlinks } from '../../assets/navlinks';

const NavHeader = ({ isNavHeaderOpen, setIsNavHeaderOpen }) => {
  return (
    <div
      className={`absolute bg-backgroundColor-primary w-full flex flex-col gap-2 overflow-hidden transition-all duration-500 ${
        isNavHeaderOpen ? 'max-h-40 shadow-bottomShadow py-6' : 'max-h-0 py-0'
      }`}
    >
      {' '}
      {navlinks.map((link, index) => {
        const { id, text, url } = link;
        return (
          <div key={id} className="flex justify-center items-center gap-[1%]">
            <nav className="grid place-items-center">
              <NavLink
                to={url}
                className="capitalize relative font-normal"
                onClick={() => setIsNavHeaderOpen(false)}
              >
                {text}
              </NavLink>
            </nav>
            {/* display a | between links (after every link except last one) */}
            {/* {index < navlinks.length - 1 && (
                    <span className="font-thin mr-[5%] text-accent">|</span>
                  )} */}
          </div>
        );
      })}
    </div>
  );
};
export default NavHeader;
