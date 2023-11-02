import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Services from './pages/services';
import About from './pages/About';
import HomeLayout from './pages/HomeLayout';

import Error from './pages/Error';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
