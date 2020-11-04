import { StyleProp } from 'react-native';

export interface CompanyProps {
  company: CompanyType;
  link?: boolean;
  touchable?: boolean;
}

export type CompanyType = {
  name: string;
  logoUrl: string;
  websiteUrl?: string;
};

export interface CompaniesListProps {
  companies?: Array<CompanyType>;
}

export interface HeaderProps {
  title: string;
  iconName?: string;
  showFavorites?: string;
}

export interface JobProps {
  customStyle: string;
  job: Job;
  toggleFavorite?: Function;
  favorite?: boolean;
}

export interface Job {
  title: string;
  cities: Array<City>;
  commitment: Commitment;
  remotes: Remotes;
  id: string;
  company?: CompanyType;
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

export interface LoadingProps {
  loadingText?: string;
  customStyles?: StyleProp<string>;
  colors?: any;
  customStylesForContainer?: string;
}
