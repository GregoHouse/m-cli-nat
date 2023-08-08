import React from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const AddFriendModal = ({ addFriendModal, setAddFriendModal, showNameClicked, modalVisible, setModalVisible }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={addFriendModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setAddFriendModal(!addFriendModal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>¿Quieres agregar a {showNameClicked}?</Text>
            <View style={{flexDirection: 'row'}}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setAddFriendModal(!addFriendModal);
                  setModalVisible(!modalVisible);
                  }}>
                <Text style={styles.textStyle}>Enviar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setAddFriendModal(!addFriendModal);
                  setModalVisible(!modalVisible);
                  }}>
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
    margin: 5
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AddFriendModal;