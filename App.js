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
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [textValue, setTextValue] = useState("");
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandleDelete = () => {};
  const onHandleModal = () => {};

  const onHandleChangeItem = (text) => setTextValue(text);
  const addItem = () => {
    if (!textValue) {
      return;
    }
    setItemList((prevState) => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ]);
    setTextValue("");
  };

  const renderItemList = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.value}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}><Text style={styles.titlePage}>MARKET</Text></View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese un item"
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <Button
          style={styles.buttonAdd}
          onPress={addItem}
          title="Añadir"
        ></Button>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={itemList}
          renderItem={renderItemList}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
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
              >
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
  titleContainer:{
    height:50,
    justifyContent:'center',
    alignItems:'flex-start'
  },titlePage:{
    color:'#EB1769',
    fontSize:18
  },
  inputContainer: {
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  input: {
    width: 200,
    textAlign:"left",
    paddingLeft:10,
    width:180,
    borderWidth:0.15
  },
  flatListContainer:{
    marginTop:20,
    marginBottom:90
  },
  itemContainer: {
    backgroundColor: "#EBDA2F",
    marginTop: 8,
    marginBottom: 8,
    height: 30,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  itemText: {
    marginLeft: 10,
    color: "#08829E",
  },
  modalViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalViewContent: {
    backgroundColor: "red",
    height: 150,
    width: 250,
    borderWidth: 0.15,
    backgroundColor: "#f4f4f4",
  },
  modalTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "baseline",
    borderBottomWidth: 0.15,
  },
  modalTitleText: {
    marginLeft: 25,
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

    borderWidth: 0.15,
  },
  modalButtonRight: {},
});
//Los nombres que de estilos que tienen que ver
//con textos los puso con mayúsculas
