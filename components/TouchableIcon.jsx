import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TouchableIcon = ({ iconName }) => {
  return (
    <TouchableOpacity 
    // onPress={} add code to switch page
    >
      <Icon name={iconName} size={30} color='black' />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
