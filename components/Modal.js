import { StyleSheet, Text, View, Modal as NewModal, TouchableHighlight } from "react-native";
import React from "react";

export default function Modal({modalVisible, onHandleDelete, onHandleCancel, }) {
  return (
    <NewModal visible={modalVisible} animationType="fade" transparent={true}>
      <View style={styles.modalViewContainer}>
        <View style={styles.modalViewContent}>
          <View style={styles.modalTitle}>
            <Text style={styles.modalTitleText}>Alerta</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text>¿Estás seguro de querer borrar el producto?</Text>
          </View>
          <View style={styles.modalButtons}>
            <TouchableHighlight
              style={[styles.modalButton, styles.modalButtonRight]}
              onPress={onHandleDelete}
            >
              <Text>Si</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.modalButton, styles.modalButtonLeft]}
              onPress={onHandleCancel}
            >
              <Text>No</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </NewModal>
  );
}

const styles = StyleSheet.create({
    modalViewContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      modalViewContent: {
        height: 150,
        width: 250,
        borderWidth: 0.20,
        backgroundColor: "white",
        borderRadius:2,
        borderColor:'#EB1769',
      },
      modalTitle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "baseline",
        borderColor:'#EB1769',
        borderBottomWidth: 0.15,
        backgroundColor:'#EB1769'
      },
      modalTitleText: {
        marginLeft: 25,
        color:'white'
      },
      modalMessage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      modalButtons: {
        height: 40,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
    
      },
      modalButton: {
        flex: 1,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth:0.15,
        borderColor:'#EB1769',
       
      },
      modalButtonRight: {
        borderRightWidth:0.15
      },
      modalButtonLeft:{
        borderLeftWidth:0.15
      }
});
