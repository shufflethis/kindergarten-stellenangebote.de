import React from 'react';
import { MapPin, Clock, Building2 } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{job.title}</h3>
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <Building2 className="h-4 w-4 mr-1" />
            <span className="mr-4">{job.employer}</span>
            <MapPin className="h-4 w-4 mr-1" />
            <span>{job.location}</span>
          </div>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
          {job.type}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.map(tag => (
          <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-50">
        <div className="flex items-center text-gray-400 text-xs">
          <Clock className="h-3 w-3 mr-1" />
          <span>Vor {job.postedDate}</span>
        </div>
        <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">
          Details ansehen &rarr;
        </button>
      </div>
    </div>
  );
};

export default JobCard;
