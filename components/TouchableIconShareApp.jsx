import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/appTheme';

const TouchableIconShareApp = ({ iconName }) => {
  return (
    <TouchableOpacity 
    // onPress={} add code to share aplication to a friend
    >
      <Icon name={iconName} size={30} color='black' />
    </TouchableOpacity>
  );
};

export default TouchableIconShareApp;
