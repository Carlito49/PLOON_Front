import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RootNavigator } from './src/navigation/RootNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto"/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
});

