import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShieldCheck, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-teal-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://picsum.photos/id/106/1920/1080"
            alt="Kindergarten Hintergrund"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Jobs mit <span className="text-teal-300">Herz</span> und <span className="text-orange-400">Verstand</span>
          </h1>
          <p className="mt-6 text-xl text-teal-100 max-w-3xl">
            Die spezialisierte Stellenbörse für Erzieher, Kinderpfleger und pädagogische Fachkräfte. 
            Finden Sie jetzt Ihren neuen Traumjob in Ihrer Nähe.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              to="/jobs"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-900 bg-teal-100 hover:bg-teal-200 md:py-4 md:text-lg md:px-10 shadow-lg"
            >
              <Search className="w-5 h-5 mr-2" />
              Stellen finden
            </Link>
            <Link
              to="/employer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10 shadow-lg"
            >
              Für Arbeitgeber
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">Warum KitaJobs?</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Wir bringen Kitas und Fachkräfte zusammen
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-teal-500 rounded-md shadow-lg">
                      <Heart className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Soziales Engagement</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Wir konzentrieren uns ausschließlich auf soziale Berufe. Hier finden Sie Arbeitgeber, die Ihre Arbeit wertschätzen.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-teal-500 rounded-md shadow-lg">
                      <ShieldCheck className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Geprüfte Qualität</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Alle Stellenanzeigen werden vor der Veröffentlichung geprüft. Sicherheit und Transparenz stehen an erster Stelle.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-teal-500 rounded-md shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Großes Netzwerk</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Verbinden Sie sich mit tausenden Einrichtungen in ganz Deutschland, von kleinen Elterninitiativen bis zu großen Trägern.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
