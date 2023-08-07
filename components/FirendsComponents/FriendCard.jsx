import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../theme/appTheme';

const FriendCard = ({ 
  name, 
  last, 
  avatar, 
  info,
  id, 
  backgroundColor, 
  setModalVisible, 
  modalVisible, 
  lockFriend, 
  setModalFriendName, 
  setModalFriendId,
  setLockStatus,
  navigation,
  showFriendProfile
}) => {
  return (
    <View style={{
      ...styles.friendContainer,
      backgroundColor: backgroundColor
      }} >
      <View 
      style={{width: '85%', alignSelf: 'center'}}
      >
        <TouchableOpacity
        onPress={() => {
          showFriendProfile(`${name} ${last} ${info}`);
          navigation.navigate('FriendProfileScreen');
          }}
        style={{width: '100%', flexDirection: 'row'}}
        >
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
            <View style={{ alignSelf: 'center', opacity: !lockFriend ? 0 : 0.4 }}>
              <Icon name='lock-closed-outline' size={20} color='#808080' />
            </View>
        </TouchableOpacity>
      </View>
      
        <View style={styles.actionFriendBox}>
         <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
            setModalFriendName(`${name} ${last}`);
            setModalFriendId(id);
            setLockStatus(lockFriend);
            }}
         >
            <Icon name='ellipsis-horizontal' size={30} color='black' />
         </TouchableOpacity>
        </View>
    </View>
  );
};

export default FriendCard;