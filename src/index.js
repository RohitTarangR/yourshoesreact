import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Service from './Components/Service/Service';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ProductMen from './Components/ProductPage/ProductMen.';
import ProductWomen from './Components/ProductPage/ProductWomen';
import ProductKids from './Components/ProductPage/ProductKids';
import ProductPage from './Components/ProductPage/ProductPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/ProductPage",
    element: <ProductPage />,
  },
  {
    path: "/ProductPage/Men",
    element: <ProductMen />,
  },
  {
    path: "/ProductPage/Women",
    element: <ProductWomen />,
  },
  {
    path: "/ProductPage/Kids",
    element: <ProductKids />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



