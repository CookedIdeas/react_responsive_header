import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useRef, useState } from 'react';

const HomeLayout = () => {
  const mainContent = useRef(null);

  const [isNavHeaderOpen, setIsNavHeaderOpen] = useState(false);

  const handleMainContentClick = (e) => {
    if (isNavHeaderOpen) {
      setIsNavHeaderOpen(false);
    }
  };

  useEffect(() => {
    mainContent.current.addEventListener('click', handleMainContentClick);
    return () => {
      mainContent.current.removeEventListener('click', handleMainContentClick);
    };
  }, []);

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
