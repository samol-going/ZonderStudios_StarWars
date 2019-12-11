import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, dark as theme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { DynamicStatusBar } from './src/components/common/dynamicStatusBar.component';
import { Router } from './src/core/navigation/routes';

export default class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={theme}>
          <DynamicStatusBar />
          <Router />
        </ApplicationProvider>
      </React.Fragment>
    );
  }
}
