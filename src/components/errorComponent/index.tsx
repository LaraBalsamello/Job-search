import React, { FC } from 'react';
import { CenteredText } from 'assets/styles/main';
import { Colors } from 'assets/styles/colors';
import { View } from 'react-native';

interface ErrorProps {
  message: string;
}

const ErrorComponent: FC<ErrorProps> = ({ message }) => (
  <CenteredText
    customStyles={`color: ${Colors.error};  margin:auto; margin-top: 20px; font-size: 16px; width: 80%;`}
  >
    {message}
  </CenteredText>
);

export default ErrorComponent;
