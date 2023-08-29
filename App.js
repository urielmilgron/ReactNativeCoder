import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [textValue, setTextValue] = useState('');
  const [itemList, setItemList] = useState([])

  const onHandleChangeItem = text => setTextValue(text)
  const onSendItem = () => setItemList(prevState => [...prevState,{id:Math.random(), value:textValue}])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder='Ingrese un item' value={textValue} onChangeText={onHandleChangeItem}/>
      <Button style={styles.buttonAdd} onPress={onSendItem} title='Añadir'></Button>
      </View>
      <View>
      <FlatList data={itemList} renderItem={({item}) => (<Text>{item.value}</Text>)} keyExtractor={item => item.id}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30,
  },
  inputContainer:{
    marginTop:20,
    justifyContent:'space-between',
    flexDirection:'row',
  },
  input:{
    width:200,
  },
  buttonAdd:{
    color:"#ff0000"
  }
});
//Los nombres que de estilos que tienen que ver
//con textos los puso con mayúsculas