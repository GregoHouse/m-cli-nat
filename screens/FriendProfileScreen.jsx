import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { AuthContextWithReducer } from '../context/AuthContextWithReducer';

const FriendProfileScreen = () => {
  const { authState } = useContext(AuthContextWithReducer);
  return (
    <View>
      <Text>{authState.profileFriendSelected}</Text>
    </View>
  );
};

export default FriendProfileScreen;