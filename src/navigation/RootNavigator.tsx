import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Accueil from '../pages/Accueil';
import CreateAccount from '../pages/CreateAccount';
import Event from '../pages/Event';

export type RouteParams = {
    Accueil: undefined;
    CreateAccount: undefined;
    Event: undefined;
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
                name="CreateAccount"
                component={CreateAccount}
                options={{
                    animation: 'slide_from_right'
                }}
                />
                <Stack.Screen 
                name='Event'
                component={Event}
                options={{
                    animation: 'slide_from_right'
                }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}