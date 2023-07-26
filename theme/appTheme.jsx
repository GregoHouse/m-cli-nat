const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Bold'
  },
  paragraph: {
    fontFamily: 'Poppins-Regular'
  },
  container: {
    flex: 1,
    padding: 15,
    // backgroundColor: 'blue',
    flexDirection: 'column'
  },
  friendContainer: {
    // flex: 1,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    borderColor: 'black',
    backgroundColor: '#FFFFFF',
  },
  avatarFriendBox: {
    width: '15%',
    alignSelf: 'center'
  },
  infoFriendBox: {
    width: '75%',
    alignSelf: 'center'
  },
  actionFriendBox: {
    alignSelf: 'center'
  },
  addFriendBox: {
    flexDirection: 'row'
  },
  shareFriendBox: {
    flexDirection: 'row'
  },
  avatarFriend: {
    borderRadius: 50,
    height: 32,
    width: 32,
    alignSelf: 'center'
  },
  actionFriendButton: {
    alignSelf: 'center'
  },
  friendNameText: {
    fontSize:14,
  },
  friendNameSubtext: {
    fontSize: 12
  },
  buttonText: {
    fontSize: 14,
    paddingLeft: 10,
    alignSelf: 'center'
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    width: '100%',
    height: 50,
    borderRadius: 15,
    zIndex: -1,
    paddingLeft: 50
  },
  totalFriends: {
    fontSize: 14,
    color: '#808080',
    marginBottom: 5
  }
});