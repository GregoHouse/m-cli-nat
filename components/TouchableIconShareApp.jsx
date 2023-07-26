import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TouchableIconShareApp = ({ iconName, onShare }) => {
  return (
    <TouchableOpacity 
    onPress={() => onShare()}
    >
      <Icon name={iconName} size={25} color='black' />
    </TouchableOpacity>
  );
};

export default TouchableIconShareApp;
