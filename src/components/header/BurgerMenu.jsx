import React from 'react';
// import { useGlobalContext } from '../../../context/GlobalContext';

const BurgerMenu = ({ isNavHeaderOpen, setIsNavHeaderOpen }) => {
  //   const { false, toggleNavHeader } = useGlobalContext();
  const hamburgerLine = `h-2 w-full rounded-full my-1 bg-accent transition ease transform duration-300`;

  return (
    <button
      className="h-12 w-12 p-2 bg-transparent flex sm:hidden flex-col justify-center items-center disabled:pointer-events-none"
      aria-label={`${
        isNavHeaderOpen
          ? 'close the navigation menu'
          : 'open the navigation menu'
      } `}
      alt="burger menu"
      onClick={() => setIsNavHeaderOpen(!isNavHeaderOpen)}
    >
      <div
        className={`${hamburgerLine} ${
          isNavHeaderOpen ? 'rotate-45 translate-y-2 ' : ''
        }`}
      />
      <div
        className={`${hamburgerLine} ${isNavHeaderOpen ? 'opacity-0' : ' '}`}
      />

      <div
        className={`${hamburgerLine} ${
          isNavHeaderOpen ? '-rotate-45 -translate-y-3 ' : ''
        }`}
      />
    </button>
  );
};
export default BurgerMenu;
