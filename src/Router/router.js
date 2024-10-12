import { createBrowserRouter } from 'react-router-dom';
import Overview from '../Components/Overview/Overview';
import Ecommerce from '../Pages/Ecommerce';
import Projects from '../Pages/Projects';

import Followers from '../Pages/Followers';
import Layout from './Layout'; 
import OrdersData from '../Components/OrdersData/OrdersData';
import OnlineCourse from '../Pages/OnlineCourse';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "ecommerce",
        element: <Ecommerce />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "online-course",
        element: <OnlineCourse />,
      },
      {
        path: "followers",
        element: <Followers />,
      },
      {
        path:"orders",
        element:<OrdersData/>
      }
    ],
  },
]);

export default router;
