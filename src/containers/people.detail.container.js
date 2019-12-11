import React from 'react';
import {StatusBar, View} from 'react-native';
import {withStyles, Text, Layout, Spinner} from '@ui-kitten/components';
import {ContainerView} from '../components/common/containerView.component';

class PeopleDetailComponent extends React.Component {
  state = {isLoading: true, peopleData: {}};

  getPeopleInfo() {
    const api_url = this.props.navigation.state.params.api_url;

    fetch(api_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        this.setState((previousState, props) => {
          return {...previousState, isLoading: false, peopleData: responseJson};
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getPeopleInfo();
  }

  componentWillUnmount() {

  }

  render() {
    const { themedStyle } = this.props;

    if (this.state.isLoading) {
      return (
        <Layout style={themedStyle.spinnerContainer}>
          <Spinner />
          <StatusBar barStyle="default" />
        </Layout>
      );
    }

    return (
      <ContainerView style={themedStyle.container}>
        <View style={themedStyle.pageTitleContainer}>
          <Text style={themedStyle.pageTitle} category='h3'>{this.state.peopleData.name}</Text>
        </View>
        <View style={[themedStyle.sectionHeader]}>
          <Text
            style={themedStyle.sectionText}
            category='s1'>
            General Info
          </Text>
        </View>
        <View style={themedStyle.section}>
          <Text appearance='hint'>Birth Year</Text>
          <Text>{this.state.peopleData.birth_year}</Text>
        </View>
        <View style={themedStyle.section}>
          <Text appearance='hint'>Gender</Text>
          <Text>{this.state.peopleData.gender}</Text>
        </View>
        <View style={themedStyle.section}>
          <Text appearance='hint'>Height</Text>
          <Text>{this.state.peopleData.height} cm</Text>
        </View>
        <View style={themedStyle.section}>
          <Text appearance='hint'>Weight</Text>
          <Text>{this.state.peopleData.mass} kg</Text>
        </View>
        <View style={themedStyle.section}>
          <Text appearance='hint'>Skin Color</Text>
          <Text>{this.state.peopleData.skin_color}</Text>
        </View>
        <View style={themedStyle.section}>
          <Text appearance='hint'>Hair Color</Text>
          <Text>{this.state.peopleData.hair_color}</Text>
        </View>
        <View style={themedStyle.section}>
          <Text appearance='hint'>Eye Color</Text>
          <Text>{this.state.peopleData.eye_color}</Text>
        </View>
      </ContainerView>
    );
  }
}

export const PeopleDetail = withStyles(PeopleDetailComponent, (theme) => ({
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme['background-basic-color-2'],
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme['background-basic-color-2'],
    paddingVertical: 16,
  },
  pageTitleContainer: {
    paddingBottom: 12,
  },
    pageTitle: {
      textAlign: 'center',
    },
  sectionHeader: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: theme['background-basic-color-2'],
    borderBottomWidth: 1,
    borderBottomColor: theme['border-basic-color-2'],
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: theme['background-basic-color-1'],
    borderBottomWidth: 1,
    borderBottomColor: theme['border-basic-color-2'],
  },
}));
