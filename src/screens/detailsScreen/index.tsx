import React, { FC, useEffect, useState } from 'react';
import Header from 'components/header/index';
import { BottomContainer, Container, TopContainer } from '../mainScreen/styles';
import { CenteredText } from 'assets/styles/main';
import Company from 'components/company';
import { ContainerScroll } from 'components/companiesList/styles';
import JobComponent from 'components/Jobs';
import { CompanyType, Job } from 'interfaces';
import { customJobStyle, customStyles } from './styles';
import { getStoredData, storeData } from 'helpers';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import { useBackButton, useIsFocused } from '@react-navigation/native';
import { empty } from '@apollo/client';

const DetailsScreen: FC<any> = ({ route }) => {
  const { company } = route.params;

  const comp: CompanyType = {
    name: company.name,
    websiteUrl: company.websiteUrl,
    logoUrl: company.logoUrl,
  };

  const [favJobs, setFavs] = useState([]);
  const [favsLoaded, setFavsLoaded] = useState(false);

  let jobs: Array<Job>;

  if (company) {
    jobs = company.jobs;
  }

  const saveJobs = async (job) => {
    try {
      const favJobs = await getStoredData('fav_job');
      let newJobFav = favJobs ? favJobs : [];
      newJobFav.push(job);
      await storeData('fav_job', JSON.stringify(newJobFav));
      getFavorites();
    } catch (error) {
      console.error('asdasdkjsadlklj', error);
    }
  };

  const removeJobs = async (job) => {
    try {
      let favJobs = await getStoredData('fav_job');
      let mappedJobs = favJobs.filter((fav) => {
        if (fav.id !== job.id) {
          return fav;
        }
      });
      await storeData('fav_job', JSON.stringify(mappedJobs));
      getFavorites();
    } catch (error) {
      console.error('asdasdkjsadlklj', error);
    }
  };

  const toggleFavorite = async (job, isFav) => {
    setFavsLoaded(false);
    if (isFav) {
      removeJobs(job);
    } else {
      saveJobs(job);
    }
  };
  const getFavorites = async () => {
    try {
      let favoriteJobs = await useAsyncStorage('fav_job').getItem();
      favoriteJobs = favoriteJobs && JSON.parse(favoriteJobs);
      favoriteJobs && setFavs(favoriteJobs);
      setFavsLoaded(true);
    } catch {
      console.error('ERROR');
      setFavsLoaded(true);
    }
  };

  const isFavorite = (job) => {
    if (favJobs) {
      for (let i = 0; i < favJobs.length; i++) {
        if (favJobs[i].id === job.id) {
          return true;
        }
      }
      return false;
    }
    return false;
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    getFavorites();
  }, [isFocused]);

  return (
    <Container>
      <TopContainer>
        <Header
          iconName="md-arrow-back"
          title="Job search"
          showFavorites="favorite"
        ></Header>
      </TopContainer>
      <BottomContainer>
        <CenteredText customStyles={customStyles}>
          {jobs && jobs.length > 0
            ? 'Empleos disponibles en:'
            : 'No se encontraron empleos disponibles en:'}
        </CenteredText>
        <Company company={comp} link={false}></Company>
        <ContainerScroll>
          {jobs.map((job: any, i: number) => (
            <JobComponent
              toggleFavorite={(job, favorite) => toggleFavorite(job, favorite)}
              key={`${i}job_`}
              favorite={isFavorite(job)}
              customStyle={jobs.length - 1 === i ? customJobStyle : ''}
              job={job}
            ></JobComponent>
          ))}
        </ContainerScroll>
      </BottomContainer>
    </Container>
  );
};

export default DetailsScreen;
