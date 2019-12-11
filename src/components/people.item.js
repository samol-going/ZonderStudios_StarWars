import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  withStyles, Text, Icon
} from '@ui-kitten/components';

class PeopleItemComponent extends React.Component {
  onPeopleItemPress = (data) => {
    this.props.onItemPress(data);
  };

  render() {
    const {themedStyle, peopleData} = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.95}
        style={themedStyle.container}
        onPress={() => {this.onPeopleItemPress({url: peopleData.url})}}
      >
        <View style={themedStyle.nameContainer}>
          <Text category='h5'>
            {peopleData.name}
          </Text>
        </View>
        <View style={themedStyle.info1Container}>
          <Text style={themedStyle.info1_label} category='p1'>Birth: </Text>
          <Text style={themedStyle.info1_text} category='p1'>{peopleData.birth_year}</Text>
        </View>
        <View style={themedStyle.info2Container}>
          <View style={themedStyle.info_col}>
            <Text style={themedStyle.info2_text} category='p1'>{peopleData.gender}</Text>
            <Text style={themedStyle.info2_label} category='p1'>Gender</Text>
          </View>
          <View style={themedStyle.info_col}>
            <Text style={themedStyle.info2_text} category='p1'>{peopleData.height} cm</Text>
            <Text style={themedStyle.info2_label} category='p1'>Height</Text>
          </View>
          <View style={themedStyle.info_col}>
            <Text style={themedStyle.info2_text} category='p1'>{peopleData.mass} kg</Text>
            <Text style={themedStyle.info2_label} category='p1'>Weight</Text>
          </View>
          <View style={themedStyle.info_col}>
            <Text style={themedStyle.info2_text} category='p1'>{peopleData.skin_color}</Text>
            <Text style={themedStyle.info2_label} category='p1'>Skin</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export const PeopleItem = withStyles(PeopleItemComponent, (theme) => ({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 4,
    paddingBottom: 8,
    paddingHorizontal: 8,
    borderBottomWidth: 3,
    borderBottomColor: theme['border-basic-color-2'],
    backgroundColor: theme['background-basic-color-1'],
  },
  nameContainer: {
    flexDirection: 'row',
  },
  info1Container: {
    flexDirection: 'row',
    color: theme['text-hint-color']
  },
    info1_label: {
      color: theme['text-hint-color'],
    },
    info1_text: {
      fontWeight: 'bold',
    },
  info2Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
    info_col: {
      flexDirection: 'column',
    },
      info2_label: {
        color: theme['text-hint-color'],
      },
      info2_text: {
        fontWeight: 'bold',
      },
}));

