import React from 'react';
// import { useGlobalContext } from '../../../context/GlobalContext';

const BurgerMenu = () => {
  //   const { false, toggleNavHeader } = useGlobalContext();
  const hamburgerLine = `h-2 w-full rounded-full my-1 bg-slate-500 transition ease transform duration-300`;

  return (
    <button
      className="h-12 w-12 p-2 bg-none flex flex-col justify-center items-center sm:hidden"
      aria-label={`${
        false ? 'close the navigation menu' : 'open the navigation menu'
      } `}
      alt="burger menu"
      onClick={() => toggleNavHeader()}
    >
      <div
        className={`${hamburgerLine} ${
          false ? 'rotate-45 translate-y-3 ' : ''
        }`}
      />
      <div className={`${hamburgerLine} ${false ? 'opacity-0' : ' '}`} />

      <div
        className={`${hamburgerLine} ${
          false ? '-rotate-45 -translate-y-3 ' : ''
        }`}
      />
    </button>
  );
};
export default BurgerMenu;
