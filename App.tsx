import React from 'react';
import { StyleSheet, View } from 'react-native';
import Accueil from './src/components/organisms/Accueil';

export default function App() {
  return (
    <View style={styles.container}>
        <Accueil />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
