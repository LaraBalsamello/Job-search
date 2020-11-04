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
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoriteJobsScreen: FC = () => {
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);

  const removeJobs = async (job) => {
    try {
      setJobs([]);
      setLoading(true);
      let favJobs = await getStoredData('fav_job');
      let mappedJobs = favJobs.filter((fav) => {
        if (fav.id !== job.id) {
          return fav;
        }
      });
      await storeData('fav_job', JSON.stringify(mappedJobs));
      getData();
    } catch (error) {
      console.error('asdasdkjsadlklj', error);
    }
  };

  const getData = async () => {
    try {
      const data = await getStoredData('fav_job');
      setJobs(data);
      setLoading(false);
    } catch (error) {}
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
                  toggleFavorite={(job) => removeJobs(job)}
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
