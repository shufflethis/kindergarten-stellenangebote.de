import React, { useState } from 'react';
import { Job, JobType } from '../types';
import JobCard from '../components/JobCard';
import { Search, Filter } from 'lucide-react';

const DUMMY_JOBS: Job[] = [
  {
    id: '1',
    title: 'Erzieher (m/w/d) für Waldkindergarten',
    employer: 'Waldwichtel e.V.',
    location: 'München',
    type: JobType.FULL_TIME,
    tags: ['Naturpädagogik', 'Wald', 'TVöD'],
    postedDate: '2 Tage'
  },
  {
    id: '2',
    title: 'Kita-Leitung (m/w/d)',
    employer: 'Städtische Kitas Berlin',
    location: 'Berlin',
    type: JobType.LEADERSHIP,
    tags: ['Leitung', 'Administration', 'Vollzeit'],
    postedDate: '5 Stunden'
  },
  {
    id: '3',
    title: 'Kinderpfleger/in',
    employer: 'Katholischer Kindergarten St. Martin',
    location: 'Köln',
    type: JobType.PART_TIME,
    tags: ['U3', 'Teilzeit', 'Kirchlicher Träger'],
    postedDate: '1 Woche'
  },
  {
    id: '4',
    title: 'Pädagogische Fachkraft',
    employer: 'Montessori Haus',
    location: 'Hamburg',
    type: JobType.FULL_TIME,
    tags: ['Montessori', 'Offenes Konzept'],
    postedDate: '3 Tage'
  },
  {
    id: '5',
    title: 'Anerkennungspraktikant (m/w/d)',
    employer: 'DRK Kita Sonnenschein',
    location: 'Frankfurt',
    type: JobType.INTERNSHIP,
    tags: ['Ausbildung', 'Praktikum'],
    postedDate: 'Gerade eben'
  },
  {
    id: '6',
    title: 'Erzieher/in bilingual (De/En)',
    employer: 'International Kids Hub',
    location: 'Berlin',
    type: JobType.FULL_TIME,
    tags: ['Englisch', 'Bilingual', 'International'],
    postedDate: '4 Tage'
  },
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
