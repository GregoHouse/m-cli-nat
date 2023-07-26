import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';


const SearchBarFriends = ({value, onChange, total}) => {
 
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
      <View>
        <Text style={styles.totalFriends}>{total} amigos</Text>
      </View>
     </View>
   );
};

export default SearchBarFriends;