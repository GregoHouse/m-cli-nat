import React from 'react';
import { Text, View } from 'react-native';
import TouchableIconNavigation from './TouchableIconNavigation';
import TouchableIconShareApp from './TouchableIconShareApp';
import { styles } from '../theme/appTheme';

const FriendsFooter = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
        <View style={styles.addFriendBox}>
          <TouchableIconNavigation iconName="person-add-outline" navigation={navigation} PageName='AddFriendScreen'  />
          <Text style={styles.buttonText}>Invitar amigo</Text>
        </View>
        <View style={styles.shareFriendBox}>
          <TouchableIconShareApp iconName="share-social-outline" />
          <Text style={styles.buttonText}>Agregar amigo</Text>
        </View>
      </View>
  );
};

export default FriendsFooter;