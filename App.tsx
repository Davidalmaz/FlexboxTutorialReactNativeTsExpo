import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [direction, setDirection] = useState('rtl');

  return (
    <View style={styles.container}>
      <View style= {[styles.box, {backgroundColor: '#f69e0b', flex: 1, alignSelf: 'center'}]}></View>
      {/* Si se quita el view queda por defecto en 100 px */}
      <View style= {[styles.box, {backgroundColor: 'blue', flex: 2, alignSelf: 'flex-end'}]}></View>
      <View style= {[styles.box, {backgroundColor: 'red', flex: 3}]}></View>
      <View style= {[styles.box, {backgroundColor: 'green', flex: 4, alignSelf: 'center'}]}>
      <Text style= {[{alignSelf: 'center'}]}>Hello</Text>
      </View>
      <View style= {[{backgroundColor: 'purple', flex: 1}]}></View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row', // column (default), row, column-reverse
    // direction: 'rtl', // ltr (default), rtl
    // alignItems: 'flex-end', // para direccionar todo de derecha a izquierda, como un direction (column, flexStart)
    // justifyContent: 'flex-end', // describe como los hijos del componente se van a alinear (Si tenemos varios flex no funcionaria ya que lo estamos limitando. Si quitamos todos los flex se puede apreciar ya que los elementos por default tienen 100 de width y height))
    // alignContent: 'flex-end', // Se necesita tener el flexWrap: 'wrap' para usarlo, lo que hace es agrupar todos los elementos del container y que si los elementos pasan de un 
    backgroundColor: '#fff',
    // padding: 10 // Afecta el espacio dentro del componente (al revés a Margin)
  },
    box: {
      width: 100,
      height: 200,
    }
});
