import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../theme/appTheme';

const FriendCard = ({ name, last, avatar, info, backgroundColor, setModalVisible, modalVisible }) => {
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
         <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
         >
            <Icon name='ellipsis-horizontal' size={30} color='black' />
         </TouchableOpacity>
        </View>
    </View>
  );
};

export default FriendCard;