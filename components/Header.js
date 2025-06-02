import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">Comunidade Venda Estratégica</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/"><span className="hover:underline">Início</span></Link></li>
            <li><Link href="/login"><span className="hover:underline">Login</span></Link></li>
            <li><Link href="/register"><span className="hover:underline">Registrar</span></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
