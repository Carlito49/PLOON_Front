import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, Platform } from 'react-native';
import { RootNavigator } from './src/navigation/RootNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto"/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width
  }
});

