import React from 'react';
import { Text, View } from 'react-native';
import TouchableIconNavigation from '../components/TouchableIconNavigation';
import AddFriendScreen from './AddFriendScreen';
import TouchableIconShareApp from '../components/TouchableIconShareApp';

const FriendsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>FriendsScreen</Text>
      <TouchableIconNavigation iconName="person-add-outline" navigation={navigation} PageName='AddFriendScreen'  />
      <TouchableIconShareApp iconName="share-social-outline" />
    </View>
  );
};

export default FriendsScreen;