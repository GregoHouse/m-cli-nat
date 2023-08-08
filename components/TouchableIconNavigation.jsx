import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TouchableIconNavigation = ({ iconName, PageName, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(PageName)}>
      <Icon name={iconName} size={25} color='black' />
    </TouchableOpacity>
  );
};

export default TouchableIconNavigation;
