import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PhoneShop from './components/PhoneShopFolder/PhoneShop.jsx'
import ShoppingCartView1 from './components/PhoneShopFolder/ShoppingCartView1.jsx'
import ShoppingCartView2 from './components/PhoneShopFolder/ShoppingCartView2.jsx'
import ShoppingCartView3 from './components/PhoneShopFolder/ShoppingCartView3.jsx'
import FavoritesView from './components/PhoneShopFolder/FavoritesView.jsx'


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
  },
  {
    path:'/phone-shop/shopping-cart-view-1/',
    element: <ShoppingCartView1/>
  },
  {
    path:'/phone-shop/shopping-cart-view-2/',
    element: <ShoppingCartView2/>
  },
  {
    path:'/phone-shop/shopping-cart-view-3/',
    element: <ShoppingCartView3/>
  }, 
  {
    path:'/phone-shop/favorites-view/',
    element: <FavoritesView/>
  },
  
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
