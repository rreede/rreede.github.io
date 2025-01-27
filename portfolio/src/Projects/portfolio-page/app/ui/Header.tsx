import Link from 'next/link';

export default function Header() {
  // NavLinks should be part of the component
  type NavLink = {
    id: number;
    href: string;
    name: string;
  };

  const navLinks: NavLink[] = [
    {
      id: 0,
      href: '/phones',
      name: 'Phones',
    },
    {
      id: 1,
      href: '/tablets',
      name: 'Tablets',
    },
  ];

  return (
    <>
      <header>
        <nav className="align-between justify-center bg-gray-100">
          <div className="wrapper flex items-center justify-between gap-3">
         <Link href='/'><h1 className="text-xl font-bold">Tech.io</h1></Link>   
            <div className="wrapper flex items-center justify-between gap-3 p-4">
          {navLinks.map((item) => (
            <div key={item.id} className="text-l text-black px-4 py-2 rounded hover:bg-blue-600 transition-all align-center">
              <Link href={item.href}>{item.name}</Link>
            </div>
          ))}
        </div>
            <Link href="/checkout-step-1">To shopping cart</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
