import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { RootNavigator } from './src/navigation/RootNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AppearanceProvider } from "react-native-appearance";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function App() {

  return (
    <AppearanceProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </AppearanceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      backgroundColor: 'black'
  },
});

