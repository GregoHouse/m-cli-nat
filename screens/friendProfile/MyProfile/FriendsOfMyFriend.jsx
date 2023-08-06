import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import FriendCard from '../../../components/FriendsOfMyFriendsComponents/FriendCard';
import FriendsHeader from '../../../components/FriendsOfMyFriendsComponents/FriendsHeader';
import FriendActionModal from '../../../components/FriendsOfMyFriendsComponents/FriendActionModal';
import AddFriendModal from '../../../components/FriendsOfMyFriendsComponents/AddFriendModal';
import { AuthContextWithReducer } from '../../../context/AuthContextWithReducer';

const FriendsOfMyFriend = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalFriendName, setModalFriendName] = useState(undefined);
  const [addFriendModal, setAddFriendModal] = useState(false);
  const [addFriendText, setAddFriendText] = useState('');
  const { authState, authState: { profileFriendSelected: { friends } }, showFriendProfile } = useContext(AuthContextWithReducer);
  
  const searchHandler = (text) => {
    return data.filter(friend => friend.name.first.toLowerCase().includes(text.toLowerCase()) || friend.name.last.toLowerCase().includes(text.toLowerCase()));
  };

  const totalFriends = () => {
    return data.length;
  };

  useEffect(() => {
      const sortFriends = () => {
          const alphabeticallyList = friends.sort(function (a, b) {
            if(a.name.first < b.name.first) {
              return -1;
            }
            if(a.name.first > b.name.first) {
              return 1;
            }
            return 0;
          });
          setData(alphabeticallyList);
      };
      sortFriends();
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
            backgroundColor={(index%2 === 0) ? '#FFFFFF' : '#F3F3F3'}
            setModalFriendName={setModalFriendName}
            addFriendModal={addFriendModal}
            setAddFriendModal={setAddFriendModal}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
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
            authState={authState}
          />
        }
      />
      <AddFriendModal 
      addFriendModal={addFriendModal}
      setAddFriendModal={setAddFriendModal}
      onChange={setAddFriendText}
      value={addFriendText}
      showNameClicked={modalFriendName}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default FriendsOfMyFriend;
