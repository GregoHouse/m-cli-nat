import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../../theme/appTheme';
import TouchableIconModal from './TouchableIconModal';

const FriendCard = ({ 
  name, 
  last, 
  avatar, 
  info,
  backgroundColor, 
  setModalFriendName, 
  addFriendModal,
  setAddFriendModal,
  modalVisible,
  setModalVisible
}) => {
  return (
    <View style={{
      ...styles.friendContainer,
      backgroundColor: backgroundColor
      }} >
            <View style={styles.avatarFriendBox}>
              <Image 
                style={styles.avatarFriend}
                source={{uri: avatar}}
                />
            </View>
            <View style={styles.infoFriendBox}>
              <Text style={styles.friendNameText}>{ `${name} ${last}` }</Text>
              <Text style={styles.friendNameSubtext}>{ info }</Text>
            </View>
        <View style={styles.actionFriendBox}>
            <TouchableIconModal 
            iconName="person-add-outline" 
            addFriendModal={addFriendModal} 
            setAddFriendModal={setAddFriendModal} 
            setModalFriendName={setModalFriendName}
            name={name}
            last={last}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            />
        </View>
    </View>
  );
};

export default FriendCard;