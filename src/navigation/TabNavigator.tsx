import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Accueil from "../pages/Accueil";
import Event from "../pages/Event";

const Tab = createBottomTabNavigator();

const TabNavigator = () =>  {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Accueil" 
                component={Accueil}
            />
            <Tab.Screen 
                name="Event" 
                component={Event}
            />
        </Tab.Navigator>
    )
};

export default TabNavigator;