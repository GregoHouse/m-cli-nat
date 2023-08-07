import React from 'react';
import { Alert, Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const FriendActionModal = ({ modalVisible, setModalVisible, showNameClicked, showIdClicked, data, setData, lockStatus, setLockStatus }) => {
  
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
              const dataUpdated = data.map(user => {
                if(user.login.uuid === showIdClicked) {
                  user.lock = !user.lock;
                }
              return user;
              });
              setData(dataUpdated);
              }}
            >
            <View style={styles.cardActionFriends}>
                <View style={styles.iconContainer}>
                  {
                    !lockStatus ?
                    (
                      <Icon name='lock-closed-outline' size={32} color='black' />
                    ) :
                    (
                    <Icon name='lock-open-outline' size={32} color='black' />
                    )
                  }
                </View>
              {
                !lockStatus ?
                (
                <View style={styles.modalTextContainer}>
                  <Text style={styles.modalText}>Bloquear a { showNameClicked }</Text>
                  <Text style={styles.modalSubtext}>{ showNameClicked } no podrá enviarte invitaciones para jugar</Text>
                </View>
                ) :
                (
                <View style={styles.modalTextContainer}>
                  <Text style={styles.modalText}>Desbloquear a { showNameClicked }</Text>
                  <Text style={styles.modalSubtext}>{ showNameClicked } prodrá enviarte invitaciones para jugar</Text>
                </View>
                )
              }
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
            const dataUpdated = data.filter(user => user.login.uuid !== showIdClicked);
            setData(dataUpdated);
          }}
          >
            <View style={styles.cardActionFriends}>
                <View style={styles.iconContainer}>
                  <Icon name='trash-outline' size={32} color='black' />
                </View>
              <View style={styles.modalTextContainer}>
                <Text style={styles.modalText}>Eliminar a { showNameClicked }</Text>
                <Text style={styles.modalSubtext}>{ showNameClicked } no podrá jugar contigo</Text>
              </View>
            </View>
          </TouchableOpacity>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Volver</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FriendActionModal;