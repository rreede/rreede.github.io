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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
