import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native'


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona una imagen</Text>
        <Image source={{ uri:  'https://picsum.photos/200/200' }} style={styles.image}></Image>
    </View>
  );

}


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' },
  title: { fontSize: 30, color: 'white' },
  image: { width: 200, height: 200, marginTop: 20, borderRadius: 100 },
  button: { backgroundColor: 'black', padding: 10, marginTop: 20 },
  btnTxt: { color: 'white', fontSize: 20 }
});


export default App;
