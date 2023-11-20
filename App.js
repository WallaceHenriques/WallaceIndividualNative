
import React from 'react';
import { View, StyleSheet } from 'react-native';
import FlipboardIcon from './src/screens/Pagina';
import { Rotas } from './src/routes';

const App = () => {
  return (
    <View style={styles.container}>
      <Rotas />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343F48',
  },
});

export default App;
