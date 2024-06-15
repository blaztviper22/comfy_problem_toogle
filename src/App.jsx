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
import { loader as ProducstLoader } from './pages/Products';
import { loader as checkoutLoader } from './pages/Checkout';
import { loader as ordersLoader } from './pages/Orders';
// actions
import { action as RegisterAction } from './pages/Register';
import { action as LoginAction } from './pages/Login';
import  { action as checkoutAction } from './Components/CheckoutForm';

import { store } from './store';


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
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: ProducstLoader
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
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store)
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: ordersLoader(store),
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
    errorElement: <Error />,
    action: LoginAction(store)
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: RegisterAction
  }
]);

function App() {

  return (
    <RouterProvider router={router} /> 
  )
}

export default App
