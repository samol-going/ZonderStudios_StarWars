import React from 'react';
import {StatusBar, View, ActivityIndicator} from 'react-native';
import {Layout, List, Spinner, withStyles} from '@ui-kitten/components';
import {PeopleItem} from '../components/people.item';

class PeopleContainer extends React.Component {
  canAction = false;

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      loading: false,   // FlatList
      refreshing: false,
      next_page: 'https://swapi.co/api/people/',
      peopleList: [],
    };
  };

  getPeople() {
    this.setState({ loading: true });

    fetch(this.state.next_page, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        const data = this.state.peopleList.length === 0 ? responseJson.results : [...this.state.peopleList, ...responseJson.results];

        this.setState((previousState, props) => {
          return {...previousState, isLoading: false, loading: false, refreshing: false, peopleList: data, next_page: responseJson.next};
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getPeople();
  }

  componentWillUnmount() {

  }

  onPeopleItemPress = (peopleData) => {
    this.props.navigation.navigate('PeopleDetail', {title: 'People Detail Info', api_url: peopleData.url});
  };

  renderItemPeople = ({item, index}) => {
    const {themedStyle} = this.props;

    return (
      <PeopleItem
        peopleData={item}
        onItemPress={this.onPeopleItemPress}
      />
    );
  };

  handleLoadMore = () => {
    if (this.state.loading || !this.state.next_page) {
      return;
    }

    this.getPeople();
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  render() {
    const {themedStyle} = this.props;

    if (this.state.isLoading) {
      return (
        <Layout style={themedStyle.spinnerContainer}>
          <Spinner />
          <StatusBar barStyle="default" />
        </Layout>
      );
    }

    return (
      <View style={themedStyle.container}>
        <List
          data={this.state.peopleList}
          renderItem={this.renderItemPeople}
          ListFooterComponent={this.renderFooter}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.01}
        />
      </View>
    );
  }
}

export const People = withStyles(PeopleContainer, (theme) => ({
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme['background-basic-color-2'],
  },
  container: {
    flex: 1,
    width: '100%',
    paddingVertical: 8,
    backgroundColor: theme['background-basic-color-2'],
  },
}));
