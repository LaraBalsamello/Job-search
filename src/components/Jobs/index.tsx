import { useQuery } from '@apollo/client';
import { TextBebaNeue } from 'components/company/styles';
import { JobProps } from 'interfaces';
import React, { FC } from 'react';
import { Text } from 'react-native';
import { REMOTES_QUERY } from './queries';
import {
  Card,
  CommitmentText,
  FlexContainerBottom,
  imageStyles,
  SuccessText,
  TopContainerJob,
} from './styles';

const JobComponent: FC<JobProps> = ({ customStyle, job }: JobProps) => {
  const { data, loading } = useQuery(REMOTES_QUERY);
  const isRemote = () => {
    for (const i of data.remotes[0].jobs) {
      return i.id === job.id;
    }
  };

  return (
    <Card customStyle={customStyle}>
      <TopContainerJob>
        <TextBebaNeue customStyle={imageStyles}>
          <Text>{job.title}</Text>
        </TextBebaNeue>
        {!loading && isRemote() ? <SuccessText>Remote</SuccessText> : null}
      </TopContainerJob>
      {job.cities.map((city, index) => (
        <FlexContainerBottom key={`${index}city_key`}>
          <Text>{city.name}, </Text>
          <Text>{city.country.name}.</Text>
        </FlexContainerBottom>
      ))}
      <CommitmentText>*{job.commitment.title}</CommitmentText>
    </Card>
  );
};

export default JobComponent;
