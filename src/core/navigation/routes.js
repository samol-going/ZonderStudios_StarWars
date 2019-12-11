import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {People} from '../../containers/people.container';
import {PeopleDetail} from '../../containers/people.detail.container';
import {
  MenuNavigationOptions,
  PeopleNavigationOptions
} from '../../core/navigation/options';

const AppNavigator = createStackNavigator(
  {
    ['People']: {
      screen: People,
      navigationOptions: PeopleNavigationOptions
    },
    'PeopleDetail': PeopleDetail,
  },
  {
    initialRouteName: 'People',
    defaultNavigationOptions: MenuNavigationOptions,
  }
);

const createAppRouter = (container) => {
  enableScreens();
  return createAppContainer(container);
};

export const Router = createAppRouter(AppNavigator);
