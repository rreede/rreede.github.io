import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FavouritesView from './components/FavouritesView.jsx';
import CheckoutStep1View from './components/CheckoutStep1View.jsx';
import CheckoutStep2View from './components/CheckoutStep2View.jsx';
import CheckoutStep3View from './components/CheckoutStep3View.jsx';
import OrderSuccess from './components/OrderSuccess.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/favouritesview",
    element: <FavouritesView/>,
  },
  {
    path: "/checkout-view-1",
    element: <CheckoutStep1View/>,
  },
  {
    path: "/checkout-view-2",
    element: <CheckoutStep2View/>,
  },
  {
    path: "/checkout-view-3",
    element: <CheckoutStep3View/>,
  },
  {
    path: "/order-success",
    element: <OrderSuccess/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
