import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeLayout = () => {
  return (
    <div className="min-h-screen w-screen relative bg-backgroundColor-primary">
      <Header />
      <main className="my-8 mx-4 sm:mx-6 md:mx-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default HomeLayout;
