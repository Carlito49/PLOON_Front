import React from 'react';
import { StyleSheet, View } from 'react-native';
import Accueil from './src/pages/Accueil';

export default function App() {
  
  return (
    <View style={styles.container}>
      <View>
        <Accueil />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
});

