import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Services from './pages/Services';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Layout from './pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: '/services',
            element: <Services />,
          },
          {
            path: '/about',
            element: <About />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
