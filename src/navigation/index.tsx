import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/mainScreen';
import DetailsScreen from 'screens/detailsScreen';
import FavoriteJobsScreen from 'screens/favoriteJobsScreen';

const Stack = createStackNavigator();

const MainNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTransparent: true,
            title: '',
          }}
          name="Home"
          component={MainScreen}
        />
        <Stack.Screen
          name="Jobs"
          component={DetailsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="favorites"
          component={FavoriteJobsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
