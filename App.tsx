import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RootNavigator } from './src/navigation/RootNavigator'

export default function App() {
  
  return (
    <View style={styles.container}>
      <View>
        <RootNavigator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
});

