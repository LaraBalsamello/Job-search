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
  IconFavorite,
  imageStyles,
  SuccessText,
  TopContainerJob,
} from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'assets/styles/colors';

const JobComponent: FC<JobProps> = ({
  customStyle,
  job,
  toggleFavorite,
  favorite,
}: JobProps) => {
  const { data, loading } = useQuery(REMOTES_QUERY);

  const isRemote = () => {
    for (const i of data.remotes[0].jobs) {
      return i.id === job.id;
    }
  };

  return (
    job && (
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
        <IconFavorite>
          <CommitmentText>*{job.commitment.title}</CommitmentText>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => toggleFavorite && toggleFavorite(job, favorite)}
          >
            {favorite ? (
              <MaterialIcons name="favorite" size={24} color={Colors.error} />
            ) : (
              <MaterialIcons name="favorite-border" size={24} color="black" />
            )}
          </TouchableOpacity>
        </IconFavorite>
      </Card>
    )
  );
};

export default JobComponent;
