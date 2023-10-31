import { navlinks } from '../assets/navlinks';

const Header = () => {
  return (
    <nav className="h-16 sm:h-24 w-full border-b-2 grid place-items-center">
      <div className="flex gap-4 sm:gap-6 justify-center items-center">
        {navlinks.map((link, index) => {
          const { id, text, url } = link;
          return (
            <>
              <a
                key={id}
                href={url}
                className="capitalize relative text-black font-normal"
              >
                {text}
              </a>
              {/* display a point (svg circle) between links (after every link except last one) */}
              {index < navlinks.length - 1 && (
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-1 w-1"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
              )}
            </>
          );
        })}
      </div>
    </nav>
  );
};
export default Header;
