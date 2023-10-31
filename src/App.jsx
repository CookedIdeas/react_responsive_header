import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Services from './pages/services';
import About from './pages/About';
import HomeLayout from './pages/HomeLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    // errorElement: <Error />,
  },
  {
    path: '/services',
    element: <Services />,
    // errorElement: <Error />,
  },
  {
    path: '/about',
    element: <About />,
    // errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
