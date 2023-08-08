import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from '../theme/appTheme';
import FriendCard from '../components/FirendsComponents/FriendCard';
import FriendsHeader from '../components/FirendsComponents/FriendsHeader';
import axios from "axios";
import FriendActionModal from '../components/FirendsComponents/FriendActionModal';
import AddFriendModal from '../components/FirendsComponents/AddFriendModal';
import { AuthContextWithReducer } from '../context/AuthContextWithReducer';

const FriendsScreen = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  // const [lock, setLock] = useState(false);
  const [modalFriendName, setModalFriendName] = useState(undefined);
  const [modalFriendId, setModalFriendId] = useState(undefined);
  const [lockStatus, setLockStatus] = useState(undefined);
  const [addFriendModal, setAddFriendModal] = useState(false);
  const [addFriendText, setAddFriendText] = useState('');
  const { authState, showFriendProfile } = useContext(AuthContextWithReducer);
  
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
          const dataWithLockProperty = response.data.results.map(friend => {
            friend.lock = false;
            return friend;
            }
          );
          const alphabeticallyList = dataWithLockProperty.sort(function (a, b) {
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
        renderItem={({item, index}) => {
        return (<FriendCard 
            name={item.name.first}
            last={item.name.last} 
            avatar={item.picture.thumbnail} 
            info={item.email}
            id={item.login.uuid}
            lockFriend={item.lock} // item.lock
            backgroundColor={(index%2 === 0) ? '#FFFFFF' : '#F3F3F3'}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
            setModalFriendName={setModalFriendName}
            setModalFriendId={setModalFriendId}
            setLockStatus={setLockStatus}
            navigation={navigation}
            showFriendProfile={showFriendProfile}
        />);
          }
        }
        keyExtractor={item => item.login.uuid}
        onRefresh={() => console.log('refreshing')}
        refreshing={false}
        ListHeaderComponent={
          <FriendsHeader 
            value={text}
            onChange={onChangeText}
            total={totalFriends()}
            addFriendModal={addFriendModal}
            setAddFriendModal={setAddFriendModal}
          />
        }
        ListFooterComponent={
          <FriendActionModal 
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          showNameClicked={modalFriendName}
          showIdClicked={modalFriendId}
          lockStatus={lockStatus}
          setLockStatus={setLockStatus}
          data={data}
          setData={setData}
        />
        }
      />
      <AddFriendModal 
      addFriendModal={addFriendModal}
      setAddFriendModal={setAddFriendModal}
      onChange={setAddFriendText}
      value={addFriendText}
      />
    </View>
  );
};

export default FriendsScreen;
