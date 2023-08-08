import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TouchableIconModal = ({ iconName, setAddFriendModal }) => {
  return (
    <TouchableOpacity onPress={() => {
      setAddFriendModal(true);
      }}>
      <Icon name={iconName} size={25} color='black' />
    </TouchableOpacity>
  );
};

export default TouchableIconModal;
