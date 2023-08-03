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
    width: '70%',
    alignSelf: 'center'
  },
  actionFriendBox: {
    alignSelf: 'center',
  },
  addFriendBox: {
    flexDirection: 'row',
    width: '15%',
    // fontWeight: '900'
  },
  shareFriendBox: {
    flexDirection: 'row',
    width: '15%'
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
    width: '70%',
    alignSelf: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: '#0075F8',
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTextContainer: {
    width: '85%'
  },
  modalText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 0,
  },
  modalSubtext: {
    paddingRight: 3
  },
  iconContainer:{
    backgroundColor: '#F3F3F3',
    borderRadius: 50,
    padding: 10,
    paddingLeft:12,
    marginRight: 15
  },
  cardActionFriends: {
    flexDirection: 'row',
    marginBottom: 15
  },
});