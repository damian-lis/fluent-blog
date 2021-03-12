import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const navLinks = [
  { path: '/', label: 'Blog', id: 1 },
  { path: '/about', label: 'About', id: 2 },
  { path: '/projects', label: 'Projects', id: 3 }
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu((prevState) => !prevState);
  };

  const router = useRouter();

  return (
    <nav className="fixed w-full bg-blue-900 z-10 border-b-2 border-yellow-300 rounded-b-xl ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={handleMobileMenu} type="button" className=" p-2 focus:outline-none">
              <img className="block h-6 w-6" src="/icons/hamburger.svg" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <a>
                  <img
                    className="block hidden sm:block h-11 w-auto"
                    src="/icons/fluentblog.svg"
                    alt="FluentBlog"
                  />
                  <img
                    className="block sm:hidden h-11 w-auto"
                    src="/icons/fluentblogmobile.svg"
                    alt="FluentBlog"
                  />
                </a>
              </Link>
            </div>

            <div className="hidden sm:block sm:ml-6 flex justify-center items-center">
              <div className=" flex space-x-4 ">
                {navLinks.map((link) => (
                  <Link href={link.path} key={link.id}>
                    <a
                      className={`${
                        router.pathname === link.path
                          ? ' bg-yellow-300 text-blue-900'
                          : 'hover:text-yellow-300 hover:underline'
                      }  text-white  px-3 py-2 my-2 rounded-md text-sm font-medium navlink`}>
                      {link.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    
        <div className={`transition-all duration-500 ${mobileMenu? "h-36"  : "h-0 "} sm:hidden overflow-hidden  rounded-b-xl sm:rounded-b-none`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link href={link.path} key={link.id}>
                <a
                  onClick={()=>setMobileMenu(false)}
                  className={`${
                    router.pathname === link.path ? ' bg-yellow-300 text-blue-900' : ''
                  }  text-white block px-3 py-2 rounded-md text-base font-medium`}>
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      
    </nav>
  );
}
