import React from 'react';
import {
  withStyles,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { SafeAreaView } from './safeAreaView.component';

class TopNavigationBarComponent extends React.Component {

  onBackButtonPress = () => {
    if (this.props.onBackPress) {
      this.props.onBackPress();
    }
  };

  renderBackButton = (source) => {
    return (
      <TopNavigationAction
        icon={source}
        onPress={this.onBackButtonPress}
      />
    );
  };

  render() {
    const { themedStyle, title, backIcon } = this.props;
    const leftControlElement = backIcon ? this.renderBackButton(backIcon) : null;

    return (
      <SafeAreaView style={themedStyle.safeArea}>
        <TopNavigation
          alignment='center'
          title={title}
          titleStyle={themedStyle.title}
          subtitleStyle={themedStyle.subTitle}
          leftControl={leftControlElement}
        />
      </SafeAreaView>
    );
  }
}

export const TopNavigationBar = withStyles(TopNavigationBarComponent, (theme) => ({
  safeArea: {
    backgroundColor: theme['background-basic-color-1'],
  },
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    fontWeight: 'normal',
  }
}));
