import { createBrowserRouter } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Shopping from './Shopping';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/shopping',
    element: <Shopping />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);
export default router;
