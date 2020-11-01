import { TextBebaNeue } from 'components/company/styles';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import {
  Card,
  CommitmentText,
  FlexContainerBottom,
  SuccessText,
  TopContainerJob,
} from './styles';

const JobComponent: FC<any> = (props) => {
  console.log(props);
  return (
    <Card customStyle={props.customStyle}>
      <TopContainerJob>
        <TextBebaNeue customStyle="max-width: 70%; font-size: 18px;">
          <Text>{props.job.title}</Text>
        </TextBebaNeue>
        <SuccessText>{props.job.remotes[0].name}</SuccessText>
      </TopContainerJob>

      {props.job.cities.map((city) => (
        <FlexContainerBottom>
          <Text>{city.name}, </Text>
          <Text>{city.country.name}.</Text>
        </FlexContainerBottom>
      ))}
      <CommitmentText>*{props.job.commitment.title}</CommitmentText>
    </Card>
  );
};

export default JobComponent;
