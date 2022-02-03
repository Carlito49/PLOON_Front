import React from "react";
import MyButton from './MyButton'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from "react-native";

const Footer = () => {
    return(
        <View>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={MyButton}/>
                </Tab.Navigator>
            </NavigationContainer>
            <MyButton image="../images/home.png" />
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default Footer;