import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Event from "../pages/Event";
import { Ionicons } from '@expo/vector-icons';
import AccountNavigator from "./AccountNavigator";
import SearchEvent from "../pages/SearchEvent";

const BottomNavigator: React.FunctionComponent = () => {

    const App = createBottomTabNavigator();

    return (
        <App.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any; 
                    switch (route.name) {
                        case 'Event': 
                            iconName = 'cafe'
                            break;
                        case 'SearchEvent':
                            iconName = 'search'
                            break;
                        case 'AccountNavigator': 
                            iconName = 'home'
                            break;
                    }
                    return iconName ?
                    <Ionicons name={iconName} size={size} color={color}/>
                    : null
                }
            })}
        >
            <App.Screen 
                name="Event"
                component={Event}
                options={{
                    headerTitleAlign: 'center',
                    title: 'Evénement'
                }}
            />

            <App.Screen 
                name="SearchEvent"
                component={SearchEvent}
                options={{
                    title: "Rechercher",
                    headerTitleAlign: 'center',
                    headerTitle: 'Rechercher un événement'
                }}
            />

            <App.Screen 
                name='AccountNavigator'
                component={AccountNavigator}
                options={{
                    headerTitleAlign: 'center',
                    title: 'Mon Compte'
                }}
            />

        </App.Navigator>
    )
};

export default BottomNavigator;