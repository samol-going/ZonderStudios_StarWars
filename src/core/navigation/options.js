import React from 'react';
import {ArrowIosBackFill} from '../../assets/icons/index';
import {TopNavigationBar} from './components/topNavigationBar.component';
import {
  getCurrentRouteState,
  isRootRoute,
  getCurrentRouteIndex,
} from './util';
import {KEY_NAVIGATION_BACK} from './constants';

const MenuTopNavigationParams = {
  header: (props) => {
    const {routeName, params} = getCurrentRouteState(props.navigation);
    const index = getCurrentRouteIndex(props.navigation);

    let title = routeName;
    if (params && params['title']) {
      title = params['title'];
    }

    return (
      <TopNavigationBar
        {...props}
        title={title}
        backIcon={isRootRoute(index) && ArrowIosBackFill}
        onBackPress={() => {
          props.navigation.goBack(KEY_NAVIGATION_BACK);
        }}
      />
    );
  },
};

const PeopleMenuTopNavigationParams = {
  header: (props) => {
    const state = getCurrentRouteState(props.navigation);

    const onBackPress = () => {
      props.navigation.goBack(KEY_NAVIGATION_BACK);
    };

    return (
      <TopNavigationBar
        {...props}
        title='People'
      />
    );
  },
};

export const MenuNavigationOptions = {
  ...MenuTopNavigationParams,
};

export const PeopleNavigationOptions = PeopleMenuTopNavigationParams;
