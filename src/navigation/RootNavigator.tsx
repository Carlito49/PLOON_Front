import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Accueil from '../pages/Accueil';
import Profile from '../pages/Profile';

export type RouteParams = {
    Accueil: undefined;
    Profile: undefined;
}

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator: React.FunctionComponent = () => {
    return(
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Accueil" component={Accueil}/>
                <Stack.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    animation: 'slide_from_right'
                }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}