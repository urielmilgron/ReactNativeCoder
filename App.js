import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder='Ingrese un item'/>
      
   
      <Button title='Añadir'></Button>
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
  }
});
