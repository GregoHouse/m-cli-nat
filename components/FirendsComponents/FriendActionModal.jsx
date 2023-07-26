import React from 'react';
import { Alert, Modal, Pressable, Text, View } from 'react-native';
import { styles } from '../../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const FriendActionModal = ({ modalVisible, setModalVisible }) => {
  
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
          <View style={styles.cardActionFriends}>
            <View style={styles.iconContainer}>
              <Icon name='close-circle-outline' size={35} color='black' />
            </View>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalText}>Bloquear a Estefanía</Text>
              <Text>Estefanía no podrá enviarte invitaciones para jugar partidas privadas</Text>
            </View>
          </View>
          <View style={styles.cardActionFriends}>
            <View style={styles.iconContainer}>
              <Icon name='trash-outline' size={32} color='black' />
            </View>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalText}>Eliminar a Estefanía</Text>
              <Text>Estefanía no podrá jugar partidas privadas contigo</Text>
            </View>
          </View>
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