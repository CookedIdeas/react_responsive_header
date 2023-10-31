import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeLayout = () => {
  return (
    <main className="min-h-screen w-screen relative">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
export default HomeLayout;
