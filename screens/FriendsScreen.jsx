import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Modal, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from '../theme/appTheme';
import FriendCard from '../components/FirendsComponents/FriendCard';
import FriendsHeader from '../components/FirendsComponents/FriendsHeader';
import FriendsFooter from '../components/FirendsComponents/FriendsFooter';
import axios from "axios";
import FriendActionModal from '../components/FirendsComponents/FriendActionModal';

const FriendsScreen = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
          const alphabeticallyList = friendsData.sort(function (a, b) {
            if(a.name.first < b.name.first) {
              return -1;
            }
            if(a.name.first > b.name.first) {
              return 1;
            }
            return 0;
          });
          setData(alphabeticallyList);
        })
        .catch(err => console.log('error Server', err));
      };
      fetchFriends();


    } catch (error) {
      console.log('Error 500', error);
    }
  }, []);

  return (
    <View style={[
      styles.container,
      modalVisible && {
        ...styles.container,
        opacity: 0.5
      }
      ]}>
      <FlatList 
        data={(text === '') ? data : searchHandler(text)}
        initialNumToRender={5}
        renderItem={({item, index}) => <FriendCard 
            name={item.name.first}
            last={item.name.last} 
            avatar={item.picture.thumbnail} 
            info={item.email} 
            backgroundColor={(index%2 === 0) ? '#FFFFFF' : '#F3F3F3'}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
        />
        }
        keyExtractor={item => item.login.uuid}
        onRefresh={() => console.log('refreshing')}
        refreshing={false}
        ListHeaderComponent={
          <FriendsHeader 
            value={text}
            onChange={onChangeText}
            total={totalFriends()}
            navigation={navigation}
          />
        }
      />
      <View style={styles.centeredView}>
      <FriendActionModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
    </View>
  );
};

export default FriendsScreen;
