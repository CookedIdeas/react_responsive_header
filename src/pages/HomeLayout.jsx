import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
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

  useEffect(() => {
    // window click listener
    window.addEventListener('click', handleMainContentClick);

    // window scroll listener
    window.addEventListener('scroll', handleMainContentScroll);
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
      <main ref={mainContent} className="my-8 mx-4 sm:mx-6 md:mx-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default HomeLayout;
