export interface CompanyProps {
  company: CompanyType;
}

export type CompanyType = {
  name: string;
  logoUrl: string;
  websiteUrl: string;
};

export interface CompaniesListProps {
  companies?: Array<CompanyType>;
}

export interface HeaderProps {
  title: string;
  iconName?: string;
}

export interface JobProps {
  customStyle: string;
  job: Job;
}

export interface Job {
  title: string;
  cities: Array<City>;
  commitment: Commitment;
  remotes: Remotes;
  locationNames: string;
  id: string;
}

export interface RemoteJob {
  title: string;
  id: string;
  company: {
    name: string;
  };
}

export interface Remotes {
  jobs: Array<RemoteJob>;
}

export interface Commitment {
  title: string;
}

export interface City {
  name: string;
  country: Country;
}

export interface Country {
  name: string;
}
