import React from 'react';

import { createRoot } from 'react-dom';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Pagess/root/Root';
import Home from './Pagess/homepage/Home';
import Donation from './Pagess/Donation/Donation';
import Statistics from './Pagess/Statistics/Statistics';
import ShowDeteils from './Pagess/showDeteils/ShowDeteils';
import Error from './componentss/error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/deteils/:id',
        element: <ShowDeteils></ShowDeteils>,
        loader:()=>fetch('/../data.json'),
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader:()=>fetch('/../data.json'),
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader:()=>fetch('/../data.json'),
        
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
