import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PhoneShop from './components/PhoneShopFolder/PhoneShop.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductView from './components/PhoneShopFolder/ProductView.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/phone-shop',
    element: <PhoneShop/>
  },
  {
    path:'/phone-shop/product/:id',
    element: <ProductView/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
