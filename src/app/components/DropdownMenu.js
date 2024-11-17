"use client"
import { useState } from 'react';
import { eventos } from '@/constants/eventos';
import Link from 'next/link';

const DropdownMenu = ({nombre,background}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
      onClick={()=>{setIsOpen(!isOpen);}}

        className="inline-flex justify-center w-full shadow-sm px-4 py-2 font-secondary leading-normal text-lg text-white group hover:opacity-60 transition-all duration-300 ease-out"
      >
        {nombre}
        <svg
          className={`mx-1 my-auto h-5 w-5 transition-transform duration-300 ease-in-out transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
        <div
        onClick={()=>{setIsOpen(false);}}
        className={`origin-top-right absolute right-0 mt-2 w-40 rounded-md font-secondary text-md text-white transition-all duration-300 ease-in-out transform ${isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        } ${
          background
        }`}>
          <div className="py-1" role="menu">
            {eventos.map((evento) => (
            <Link key={evento.nombre} href={`/eventos/${evento.slug}`} className="block px-4 py-2 hover:opacity-65">
                {evento.nombre}
            </Link>
            ))}
          </div>
        </div>
    </div>
  );
};

export default DropdownMenu;