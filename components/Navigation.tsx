import React, { useState } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Startseite', path: '/' },
    { name: 'Stellenangebote', path: '/jobs' },
    { name: 'Für Arbeitgeber (KI)', path: '/employer' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-teal-600 font-bold' : 'text-gray-600 hover:text-teal-500';
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <HeartHandshake className="h-8 w-8 text-teal-600" />
              <span className="font-bold text-xl tracking-tight text-gray-800">
                Kita<span className="text-teal-600">Jobs</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${isActive(link.path)} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/jobs" className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-700 transition-colors shadow-sm">
              Jetzt Bewerben
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Menü öffnen</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${isActive(link.path)} block px-3 py-2 rounded-md text-base font-medium`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
