import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../theme/appTheme';
import TouchableIconShareApp from '../TouchableIconShareApp';
import onShare from '../../utils/onShare';
import TouchableIconModal from '../TouchableIconModal';

const FriendsHeader = ({ value, onChange, total, addFriendModal, setAddFriendModal }) => {
 
   return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Icon 
          name='search-outline' 
          size={25} 
          color='black' 
          style={{position: 'absolute', left: 10, top: 12, zIndex: 2}}
          />
        <TextInput 
          placeholder='Buscar por nombre o correo'
          style={styles.searchBar}
          onChangeText={onChange}
          value={value}
        />
      </View>
      <View style={{flex: 1, flexDirection: 'row', margin: 5}}>
          <Text style={styles.totalFriends}>{total} amigos</Text>
        <View style={styles.addFriendBox}>
          <TouchableIconModal 
          iconName="person-add-outline" 
          addFriendModal={addFriendModal} 
          setAddFriendModal={setAddFriendModal} 
          />
        </View>
        <View style={styles.shareFriendBox}>
          <TouchableIconShareApp 
          iconName="share-social-outline" 
          onShare={onShare}
          />
        </View>
      </View>
     </View>
   );
};

export default FriendsHeader;