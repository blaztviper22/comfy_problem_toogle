/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  About,
  Cart,
  Checkout,
  Login,
  Products,
  SingleProduct,
  Orders,
  Landing,
  HomeLayout,
  Error,
  Register
} from './pages';

import { ErrorElement } from './Components';

// loaders
import { loader as landingLoader } from './pages/Landing';
import { loader as SingleProductLoader } from './pages/SingleProduct';
// actions

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: SingleProductLoader,
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <Error />
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />
  }
]);

function App() {

  return (
    <RouterProvider router={router} /> 
  )
}

export default App
