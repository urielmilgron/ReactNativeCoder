import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Modal from "./components/Modal";

export default function App() {
  const [textValue, setTextValue] = useState("");
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState();
  const onHandleDelete = () => {
    let array = itemList;
    array.splice(itemSelected, 1);
    setItemList(array);
    setModalVisible(false);
  };
  const onHandleCancel = () => {
    setItemSelected();
    setModalVisible(false);
  };
  const onHandleModal = (index) => {
    setModalVisible(true);
    setItemSelected(index);
  };

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

  const renderItemList = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.value}</Text>
        <TouchableOpacity
          style={styles.iconTrashContainer}
          onPress={() => onHandleModal(index)}
        >
          <Ionicons name="ios-trash-bin" size={22} color="white" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <Text style={styles.titlePage}>MARKET</Text>
      </View>
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
     <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} onHandleCancel={onHandleCancel}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  titleContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  titlePage: {
    color: "#EB1769",
    fontSize: 18,
  },
  inputContainer: {
    marginTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  input: {
    width: 200,
    textAlign: "left",
    paddingLeft: 10,
    width: 180,
    borderWidth: 0.15,
  },
  flatListContainer: {
    marginTop: 20,
    marginBottom: 90,
  },
  itemContainer: {
    backgroundColor: "#EBDA2F",
    marginTop: 8,
    marginBottom: 8,
    height: 35,
    borderRadius: 2,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,

    elevation: 1,
  },
  itemText: {
    marginLeft: 10,
    color: "#08829E",
  },
  iconTrashContainer: {
    backgroundColor: "#EB1769",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 35,
    borderBottomRightRadius: 2,
    borderTopRightRadius: 2,
    borderLeftWidth: 0.2,
    borderLeftColor: "black",
  },
 
});
//Los nombres que de estilos que tienen que ver
//con textos los puso con mayúsculas
