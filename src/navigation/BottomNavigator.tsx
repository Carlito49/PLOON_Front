import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Event from "../pages/Event";
import { Ionicons } from '@expo/vector-icons';
import AccountNavigator from "./AccountNavigator";
import Messages from "../pages/Messages";
import Calendrier from "../pages/Calendrier";
import Notifications from "../pages/Notifications";

const BottomNavigator: React.FunctionComponent = () => {

    const App = createBottomTabNavigator();

    return (
        <App.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName: any; 
                    switch (route.name) {
                        case 'Event': 
                            iconName = 'home'
                            break;
                        case 'Notifications': 
                            iconName = 'notifications'
                            break;
                        case 'Calendrier': 
                            iconName = 'md-calendar'
                            break;
                        case 'Messages': 
                            iconName = 'mail'
                            break;
                        case 'AccountNavigator': 
                            iconName = 'person'
                            break;
                    }
                    return iconName ?
                    <Ionicons name={iconName} size={size} color={color} />
                    : null
                }
            })}
        >
            <App.Screen 
                name="Event"
                component={Event}
                options={{
                    headerTitleAlign: 'center',
                    title: 'Evénements',
                    tabBarShowLabel: false,
                }}
            />

            <App.Screen 
                name="Calendrier"
                component={Calendrier}
                options={{
                    tabBarShowLabel: false,
                    headerTitleAlign: 'center',
                    headerTitle: 'Calendrier'
                }} 
            />

            <App.Screen 
                name="Notifications"
                component={Notifications}
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: 'Notifications',
                    tabBarShowLabel: false,
                }}
            />

            <App.Screen 
                name="Messages"
                component={Messages}
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: 'Mes Messages',
                    tabBarShowLabel: false,
                }}
            />

            <App.Screen 
                name='AccountNavigator'
                component={AccountNavigator}
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: 'Profil',
                    tabBarShowLabel: false,
                }}
            />
        </App.Navigator>
    )
};

export default BottomNavigator;