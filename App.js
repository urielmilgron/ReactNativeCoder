import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Modal,
  TouchableHighlight,
} from "react-native";

export default function App() {
  const [textValue, setTextValue] = useState("");
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);
  const [itemSelected, setItemSelected] = useState({});
  

  const onHandleDelete = () => {}
  const onHandleModal = () => {}

  const onHandleChangeItem = (text) => setTextValue(text);
  const onSendItem = () =>
    setItemList((prevState) => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ]);


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese un item"
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <Button
          style={styles.buttonAdd}
          onPress={onSendItem}
          title="Añadir"
        ></Button>
      </View>
      <View>
        <FlatList
          data={itemList}
          renderItem={({ item }) => <Text>{item.value}</Text>}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal visible={modalVisible} animationType="fade"  transparent={true}>
        <View style={styles.modalViewContainer}>
        <View style={styles.modalViewContent}>
        <View style={styles.modalTitle}>
          <Text style={styles.modalTitleText}>Alerta</Text>
        </View>
        <View style={styles.modalMessage}>
          <Text>¿Estás seguro de querer borrar el producto?</Text>
        </View>
        <View style={styles.modalButtons}>
        <TouchableHighlight style={[styles.modalButton, styles.modalButtonRight]}>
          <Text>Si</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.modalButton}>
          <Text>No</Text>
        </TouchableHighlight>
        </View>
        </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  inputContainer: {
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  input: {
    width: 200,
  },
  buttonAdd: {
    color: "#ff0000",
  },
  modalViewContainer:{   
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalViewContent:{
    backgroundColor:"red",
    height:150,
    width:250,
    borderWidth: 0.15,
    backgroundColor: '#f4f4f4',

  },
  modalTitle:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  modalTitleText:{
    marginLeft:25
  },
  modalMessage:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalButtons:{
    height:40,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'flex-end'
  },
  modalButton:{
    flex:1,
    height:35,
    justifyContent: 'center',
    alignItems: 'center',
  
    borderWidth:0.15
   
  },
  modalButtonRight:{
    
  }
});
//Los nombres que de estilos que tienen que ver
//con textos los puso con mayúsculas
