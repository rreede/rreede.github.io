"use client"

import Header from '../ui/Header';

import { useEffect, useState } from 'react';
import Link from "next/link";

export default function Checkout1() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    // Retrieve cart data from localStorage when the component mounts
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
    <Header/>

    <main>
    <div className="wrapper">

      <h1 className='text-3xl'>Your cart</h1>

     
      <div>
        {cart.length > 0 ? (
          <ul className='bg-gray-100 p-3 rounded-md mt-3'>
            {cart.map((item: any) => (
              <li className='p-3' key={item.productId}>
                <p>{item.name}</p>
                <p>Price: {item.price}$</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

     <button className='bg-blue-600 py-3 px-6 mt-3 text-white rounded-md'><Link href='/checkout-step-2'>To Checkout 2</Link></button>

      </div>
      </main>
    </>
  );
}
