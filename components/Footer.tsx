import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">KitaJobs</h3>
            <p className="text-gray-300 text-sm">
              Die führende Plattform für pädagogische Fachkräfte. Finden Sie Ihren Traumjob in Kitas, Kindergärten und Vorschulen in ganz Deutschland.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/jobs" className="hover:text-white">Alle Stellenangebote</Link></li>
              <li><Link to="/employer" className="hover:text-white">Für Arbeitgeber</Link></li>
              <li><Link to="/" className="hover:text-white">Startseite</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/impressum" className="hover:text-white">Impressum</Link></li>
              <li><Link to="/impressum" className="hover:text-white">Datenschutz</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Kindergarten Stellenangebote. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
