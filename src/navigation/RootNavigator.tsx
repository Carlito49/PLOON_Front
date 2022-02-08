import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Accueil from '../pages/Accueil';

export type RouteParams = {
    Accueil: undefined;
}

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator: React.FunctionComponent = () => {
    return(
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Accueil" component={Accueil}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}