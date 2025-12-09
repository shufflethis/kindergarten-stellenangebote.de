export interface Job {
  id: string;
  title: string;
  employer: string;
  location: string;
  type: JobType;
  tags: string[];
  postedDate: string;
}

export enum JobType {
  FULL_TIME = 'Vollzeit',
  PART_TIME = 'Teilzeit',
  INTERNSHIP = 'Praktikum',
  LEADERSHIP = 'Leitung',
}

export interface GeneratorParams {
  jobTitle: string;
  facilityName: string;
  city: string;
  benefits: string;
}
