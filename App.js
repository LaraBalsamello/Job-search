/* eslint-disable global-require */
/* eslint-disable no-use-before-define */

import * as React from 'react';
import { useFonts } from 'expo-font';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import MainNav from './src/navigation/index.tsx';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  cache: new InMemoryCache(),
});

export default function App() {
  const [isLoaded] = useFonts({
    'beba-neue': require('assets/fonts/BebasNeue-Regular.ttf'),
    asap: require('assets/fonts/Asap-Medium.ttf'),
    asapBold: require('assets/fonts/Asap-Bold.ttf'),
  });
  return (
    isLoaded && (
      <ApolloProvider client={client}>
        <MainNav />
      </ApolloProvider>
    )
  );
}
