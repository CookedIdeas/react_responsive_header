import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import { useEffect, useRef, useState } from 'react';

const HomeLayout = () => {
  // state for navheader → shared to Header and its children components
  const [isNavHeaderOpen, setIsNavHeaderOpen] = useState(false);

  // feature : close navheader on main content click and on scroll
  // create a ref on main container
  // add event listener to widow
  // on click → handleMainContentClick → if clicked element is in main div and navheader is open → close navheader
  // on scroll → handleMainContentScroll → if navheader is open → close navheader

  const mainContent = useRef(null);

  const handleMainContentClick = (e) => {
    const clickedElement = e.target;
    if (
      mainContent.current &&
      mainContent.current.contains(clickedElement) &&
      isNavHeaderOpen
    ) {
      setIsNavHeaderOpen(false);
    }
  };

  const handleMainContentScroll = () => {
    if (mainContent.current && isNavHeaderOpen) {
      setIsNavHeaderOpen(false);
    }
  };

  // enable/disable header automatic closing behavior
  const [isClickBehaviorEnable, setIsClickBehaviorEnable] = useState(true);
  const [isScrollBehaviorEnable, setIsScrollBehaviorEnable] = useState(true);

  useEffect(() => {
    // window click listener
    if (isClickBehaviorEnable) {
      window.addEventListener('click', handleMainContentClick);
    }

    // window scroll listener
    if (isScrollBehaviorEnable) {
      window.addEventListener('scroll', handleMainContentScroll);
    }

    return () => {
      window.removeEventListener('click', handleMainContentClick);
      window.removeEventListener('scroll', handleMainContentScroll);
    };
  });

  return (
    <div className="min-h-screen h-full relative bg-backgroundColor-primary">
      <Header
        isNavHeaderOpen={isNavHeaderOpen}
        setIsNavHeaderOpen={setIsNavHeaderOpen}
      />
      <main ref={mainContent} className="my-16 mx-4 sm:mx-6 md:mx-8">
        {/* CHOOSE HEADER CLOSING BEHAVIOR */}
        <div className="flex flex-col items-start gap-4 sm:hidden">
          <div>
            <input
              type="checkbox"
              id="header-option-click"
              name="header-option-click"
              checked={isClickBehaviorEnable}
              value={isClickBehaviorEnable}
              onChange={() => setIsClickBehaviorEnable(!isClickBehaviorEnable)}
            />
            <label htmlFor="header-option-click" className="pl-2">
              Close header on click outside of header
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="header-option-scroll"
              name="header-option-scroll"
              checked={isScrollBehaviorEnable}
              value={isScrollBehaviorEnable}
              onChange={() =>
                setIsScrollBehaviorEnable(!isScrollBehaviorEnable)
              }
            />
            <label htmlFor="header-option-scroll" className="pl-2">
              Close header on page scroll
            </label>
          </div>
        </div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default HomeLayout;
