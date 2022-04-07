import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Accueil from '../pages/Accueil';
import Profile from '../pages/Profile';
import CreateAccount from '../pages/CreateAccount';

export type RouteParams = {
    Accueil: undefined;
    Profile: undefined;
    CreateAccount: undefined;
}

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator: React.FunctionComponent = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Group>
                <Stack.Screen 
                name="Accueil" 
                component={Accueil}
                options={{
                    headerTitleAlign: 'center',  
                }} 
                
                />
                <Stack.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    animation: 'slide_from_right'
                }}
                />
                <Stack.Screen 
                name="CreateAccount"
                component={CreateAccount}
                options={{
                    animation: 'slide_from_right'
                }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}