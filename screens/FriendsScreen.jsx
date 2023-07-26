import React, { useEffect, useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import { styles } from '../theme/appTheme';
import FriendCard from '../components/FriendCard';
import SearchBarFriends from '../components/SearchBarFriends';
import FriendsFooter from '../components/FriendsFooter';
import axios from "axios";

const FriendsScreen = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  const [data, setData] = useState([]);

  const searchHandler = (text) => {
    return data.filter(friend => friend.name.first.toLowerCase().includes(text.toLowerCase()) || friend.name.last.toLowerCase().includes(text.toLowerCase()));
  };

  const totalFriends = () => {
    return data.length;
  };

  useEffect(() => {
    try {
      const fetchFriends = async() => {
        await axios.get('https://randomuser.me/api/?results=20')
        .then((response) => {
          const friendsData = response.data.results;
          setData(friendsData);
        });
      };
      fetchFriends();

    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
        data={(text === '') ? data : searchHandler(text)}
        initialNumToRender={5}
        renderItem={({item, index}) => <FriendCard 
            name={item.name.first}
            last={item.name.last} 
            avatar={item.picture.thumbnail} 
            info={item.info} 
            backgroundColor={(index%2 === 0) ? '#FFFFFF' : '#F3F3F3'}
        />
        }
        keyExtractor={item => item.login.uuid}
        onRefresh={() => console.log('refreshing')}
        refreshing={false}
        ListHeaderComponent={
          <SearchBarFriends 
            value={text}
            onChange={onChangeText}
            total={totalFriends()}
          />
        }
        ListFooterComponent={
          <FriendsFooter 
            navigation={navigation}
          />
        }
      />
    </View>
  );
};

export default FriendsScreen;