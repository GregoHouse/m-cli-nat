import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../theme/appTheme';
import ProfileDescription from '../../screens/friendProfile/MyProfile/Description';

const MOCK = {
	PROFILE: {
		avatar:
			'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80',
		name: 'JOSE S',
		about:
			'Apasionado del paddle, jugador de nivel intermedio en busca de desafíos y mejora constante. ¡Listo para competir!',
	},
	USER_INFO: [],
};

const FriendsHeader = ({value, onChange, total, authState}) => {
	const { profileFriendSelected: { avatar, name, lastname } } = authState;

 
   return (
    <View>
      <View style={{
        margin: 10
      }}>
        <ProfileDescription
          userAbout={MOCK.PROFILE.about} // desestructurar el objeto con todos los datos que vengan de friend
          userAvatar={avatar} // desestructurar el objeto con todos los datos que vengan de friend
          userName={`${name} ${lastname}`} // desestructurar el objeto con todos los datos que vengan de friend
        />
      </View>
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
      </View>
     </View>
   );
};

export default FriendsHeader;