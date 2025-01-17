import React, { FC, useEffect, useState } from 'react';
import Header from 'components/header/index';
import { CenteredText } from 'assets/styles/main';
import {
  BottomContainer,
  Container,
  TopContainer,
} from 'screens/mainScreen/styles';
import JobComponent from 'components/Jobs';
import { getStoredData, storeData } from 'helpers';
import { customJobStyle } from 'screens/detailsScreen/styles';
import { ContainerScroll } from 'components/companiesList/styles';
import Company from 'components/company';
import { ToastAndroid, View } from 'react-native';
import { Job } from 'interfaces';

const FavoriteJobsScreen: FC = () => {
  const [jobs, setJobs] = useState([]);

  const removeJobs = async (job: Job) => {
    try {
      setJobs([]);
      let favJobs = await getStoredData('fav_job');
      let mappedJobs = favJobs.filter((fav: Job) => {
        if (fav.id !== job.id) {
          return fav;
        }
      });
      await storeData('fav_job', JSON.stringify(mappedJobs));
      getData();
    } catch {
      ToastAndroid.show('Hubo un problema borrando empleo de favoritos', 1000);
    }
  };

  const getData = async () => {
    try {
      const data = await getStoredData('fav_job');
      setJobs(data);
    } catch {
      ToastAndroid.show('Hubo un problema obteniendo empleos favoritos', 1000);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <TopContainer>
        <Header title="Job search" iconName="md-arrow-back"></Header>
      </TopContainer>
      <BottomContainer>
        <CenteredText>Favoritos</CenteredText>
        <ContainerScroll>
          {jobs && jobs.length > 0 ? (
            jobs.map((job: any, i: number) => (
              <View key={i}>
                <Company
                  touchable={false}
                  company={{
                    name: job.company.name,
                    logoUrl: job.company.logoUrl,
                    websiteUrl: job.company.websiteUrl,
                  }}
                  link={false}
                ></Company>
                <JobComponent
                  toggleFavorite={(job: Job) => removeJobs(job)}
                  key={`${i}job_`}
                  favorite={true}
                  customStyle={jobs.length - 1 === i ? customJobStyle : ''}
                  job={job}
                ></JobComponent>
              </View>
            ))
          ) : (
            <CenteredText customStyles="font-size: 12px">
              *No se encontrarion empleos guardados
            </CenteredText>
          )}
        </ContainerScroll>
      </BottomContainer>
    </Container>
  );
};

export default FavoriteJobsScreen;
