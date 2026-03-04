import React, { useState } from 'react';
import { Job, JobType } from '../types';
import JobCard from '../components/JobCard';
import { Search, Filter } from 'lucide-react';

const DUMMY_JOBS: Job[] = [
  {
    id: '1',
    title: 'Reinigungshelfer - Kindergarten (m/w/d)',
    employer: 'PerZukunft Arbeitsvermittlung GmbH&Co.KG',
    location: 'Berlin',
    type: 'Vollzeit',
    tags: ['Helfer/in - Reinigung'],
    postedDate: '2026-03-04'
  },
  {
    id: '2',
    title: 'Einrichtungsleiter*in Kindergarten, Erzieher*in',
    employer: 'AWO Bezirksverband Baden e.V.',
    location: 'Weil am Rhein',
    type: 'Vollzeit',
    tags: ['Kindergartenleiter/in'],
    postedDate: '2026-03-04'
  },
  {
    id: '3',
    title: 'Pädagogische Fachkraft (Kindergarten) (m/w/d)',
    employer: 'Ev. Kirchengemeinde Hahn',
    location: 'Pfungstadt',
    type: 'Vollzeit',
    tags: ['Pädagoge/Pädagogin'],
    postedDate: '2026-03-04'
  },
  {
    id: '4',
    title: 'Erzieher (m/w/d)',
    employer: 'Verbandsgemeinde Ruwer',
    location: 'Waldrach',
    type: 'Vollzeit',
    tags: ['Erzieher/in'],
    postedDate: '2026-03-04'
  },
  {
    id: '5',
    title: 'Erzieher (m/w/d) Kindergarten',
    employer: 'Klinikum Garmisch-Partenkirchen',
    location: 'Garmisch-Partenkirchen',
    type: 'Vollzeit',
    tags: ['Erzieher/in'],
    postedDate: '2026-03-03'
  },
  {
    id: '6',
    title: 'Heilerziehungspfleger (m/w/d) Kindergarten',
    employer: 'PERSO PLANKONTOR GmbH',
    location: 'Hannover',
    type: 'Vollzeit',
    tags: ['Heilerziehungspfleger/in'],
    postedDate: '2026-03-03'
  },
  {
    id: '7',
    title: 'Hilfskraft als Individualbegleitung im Kindergarten (m/w/d)',
    employer: 'Regens Wagner Hohenwart',
    location: 'Freising, Oberbayern',
    type: 'Vollzeit',
    tags: ['Schulbegleiter/in'],
    postedDate: '2026-03-03'
  },
  {
    id: '8',
    title: 'Bodenleger/in - Kindergärten - Berlin  (m/w/d)',
    employer: 'PerZukunft Arbeitsvermittlung GmbH&Co.KG',
    location: 'Berlin',
    type: 'Vollzeit',
    tags: ['Bodenleger/in'],
    postedDate: '2026-03-03'
  },
  {
    id: '9',
    title: 'Einrichtungsleitung, Kindergarten Graslilienanger',
    employer: 'Stiftung zusammen. tun.',
    location: 'München',
    type: 'Vollzeit',
    tags: ['Kindergartenleiter/in'],
    postedDate: '2026-03-03'
  },
  {
    id: '10',
    title: 'Erzieher m/w/d',
    employer: 'Arnold Röll Beratung und Vermi ttlung von Arbeitskräften',
    location: 'Offenburg',
    type: 'Vollzeit',
    tags: ['Erzieher/in'],
    postedDate: '2026-03-03'
  },
  {
    id: '11',
    title: 'Heilerziehungspfleger (m/w/d) Kindergarten',
    employer: 'KCS Medical GmbH',
    location: 'Köln',
    type: 'Vollzeit',
    tags: ['Heilerziehungspfleger/in'],
    postedDate: '2026-02-27'
  },
  {
    id: '12',
    title: 'Küchenhilfe (m/w/d) Kindergarten',
    employer: 'Gemeinde Hohenthann',
    location: 'Hohenthann bei Landshut, Isar',
    type: 'Vollzeit',
    tags: ['Helfer/in - Küche'],
    postedDate: '2026-02-26'
  },
  {
    id: '13',
    title: 'Reinigungskraft für einen Kindergarten',
    employer: 'Andrea Kloppisch Haushalt- und Büroservice',
    location: 'Dresden',
    type: 'Vollzeit',
    tags: ['Gebäudereiniger/in'],
    postedDate: '2026-02-25'
  },
  {
    id: '14',
    title: 'Kinderpflegerin (m/w/d) im Kindergarten',
    employer: 'Ev.-Luth. Kirchengemeinde Augsburg Auferstehungskirche KiTa Auferstehungskirche',
    location: 'Augsburg, Bayern',
    type: 'Vollzeit',
    tags: ['Sozialpädagogische/r Assistent/in / Kinderpfleger/in'],
    postedDate: '2026-02-25'
  },
  {
    id: '15',
    title: 'Köche m/w/d für Kindergärten',
    employer: 'Socco Group GmbH NL Hamburg',
    location: 'Hamburg',
    type: 'Vollzeit',
    tags: ['Koch/Köchin'],
    postedDate: '2026-02-24'
  },
  {
    id: '16',
    title: 'Individualbegleitung / Kindergarten',
    employer: 'Ambulanter Pflegedienst Hände die Helfen',
    location: 'München',
    type: 'Vollzeit',
    tags: ['Schulbegleiter/in'],
    postedDate: '2026-02-24'
  },
  {
    id: '17',
    title: 'Erzieher (m/w/d) Kindergarten',
    employer: 'PERSO PLANKONTOR GmbH',
    location: 'Markkleeberg',
    type: 'Vollzeit',
    tags: ['Erzieher/in'],
    postedDate: '2026-02-24'
  },
  {
    id: '18',
    title: 'Erzieher (m/w/d) Kindergarten',
    employer: 'PERSO PLANKONTOR GmbH',
    location: 'Brandis bei Wurzen',
    type: 'Vollzeit',
    tags: ['Erzieher/in'],
    postedDate: '2026-02-24'
  },
  {
    id: '19',
    title: 'Hausmeister für Kindergarten (m/w/d)',
    employer: 'PerZukunft Arbeitsvermittlung GmbH&Co.KG',
    location: 'Berlin',
    type: 'Vollzeit',
    tags: ['Hausmeister/in'],
    postedDate: '2026-02-19'
  },
  {
    id: '20',
    title: 'Individualbegleiter (m/w/d) im Kindergarten',
    employer: 'Malteser Hilfsdienst gemeinnützige GmbH',
    location: 'Beilngries',
    type: 'Vollzeit',
    tags: ['Schulbegleiter/in'],
    postedDate: '2026-02-18'
  },
  {
    id: '21',
    title: 'Spüler in einem Kindergarten (m/w/d)',
    employer: 'PerZukunft Arbeitsvermittlung GmbH&Co.KG',
    location: 'Berlin',
    type: 'Vollzeit',
    tags: ['Helfer/in - Küche'],
    postedDate: '2026-02-17'
  },
  {
    id: '22',
    title: 'Einrichtungsleitung Kindergarten',
    employer: 'Zipfelmützen e.V.',
    location: 'Walldorf, Baden',
    type: 'Vollzeit',
    tags: ['Gruppen-, Teamleiter/in'],
    postedDate: '2026-02-16'
  },
  {
    id: '23',
    title: 'Heilerziehungspfleger (m/w/d) Kindergarten',
    employer: 'PERSO PLANKONTOR GmbH',
    location: 'Seelze',
    type: 'Vollzeit',
    tags: ['Heilerziehungspfleger/in'],
    postedDate: '2026-02-16'
  },
  {
    id: '24',
    title: 'Sozialassistent im Kindergarten (m/w/d)',
    employer: 'PERSO PLANKONTOR GmbH',
    location: 'Hildesheim',
    type: 'Vollzeit',
    tags: ['Sozialassistent/in'],
    postedDate: '2026-02-13'
  },
  {
    id: '25',
    title: 'Sozialassistent im Kindergarten (m/w/d)',
    employer: 'PERSO PLANKONTOR GmbH',
    location: 'Hannover',
    type: 'Vollzeit',
    tags: ['Sozialassistent/in'],
    postedDate: '2026-02-12'
  }
];

const Jobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  const filteredJobs = DUMMY_JOBS.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.employer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'all' || job.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Aktuelle Stellenangebote</h1>
          <p className="mt-4 text-lg text-gray-500">Finden Sie die perfekte Position in Ihrer Region.</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Jobtitel, Ort oder Arbeitgeber..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm appearance-none"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">Alle Anstellungsarten</option>
                <option value={JobType.FULL_TIME}>{JobType.FULL_TIME}</option>
                <option value={JobType.PART_TIME}>{JobType.PART_TIME}</option>
                <option value={JobType.LEADERSHIP}>{JobType.LEADERSHIP}</option>
                <option value={JobType.INTERNSHIP}>{JobType.INTERNSHIP}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job List */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">Keine Stellenangebote gefunden, die Ihren Kriterien entsprechen.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
