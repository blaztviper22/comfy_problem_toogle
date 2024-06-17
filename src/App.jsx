/* eslint-disable no-unused-vars */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime:1000 * 60 * 5,
    }
  }
});

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
        loader: landingLoader(queryClient),
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: ProducstLoader(queryClient)
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: SingleProductLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store,queryClient)
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: ordersLoader(store,queryClient),
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider> 
  )
}

export default App
