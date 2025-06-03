import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Comunidade Venda Estratégica</h3>
            <p className="text-gray-300">
              Plataforma de comunidade gamificada para profissionais de vendas.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/dashboard"><span className="hover:text-blue-400">Dashboard</span></Link></li>
              <li><Link href="/aulas"><span className="hover:text-blue-400">Aulas</span></Link></li>
              <li><Link href="/feed"><span className="hover:text-blue-400">Feed</span></Link></li>
              <li><Link href="/biblioteca"><span className="hover:text-blue-400">Biblioteca</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>Email: contato@vendaestrategica.com</li>
              <li>WhatsApp: (11) 99999-9999</li>
              <li>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="hover:text-blue-400">Instagram</a>
                  <a href="#" className="hover:text-blue-400">Facebook</a>
                  <a href="#" className="hover:text-blue-400">YouTube</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Comunidade Venda Estratégica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
