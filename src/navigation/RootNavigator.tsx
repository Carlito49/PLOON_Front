import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Accueil from '../pages/Accueil';

export type RouteParams = {
    Home: undefined;
}

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Home" component={Accueil}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}