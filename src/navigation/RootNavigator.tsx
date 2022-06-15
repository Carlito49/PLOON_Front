import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccueilNavigator from './AccueilNavigator';
import BottomNavigator from './BottomNavigator';

export type RouteParams = {
    AccueilNavigator: undefined;
    BottomNavigator: undefined;
    Accueil: undefined;
}

export const RootNavigator: React.FunctionComponent = () => {

    const Stack = createNativeStackNavigator<RouteParams>();
    
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Group>
                <Stack.Screen 
                name="AccueilNavigator" 
                component={AccueilNavigator}
                options={{
                    headerTitleAlign: 'center',  
                }} 
                />
                <Stack.Screen 
                name='BottomNavigator'
                component={BottomNavigator}
                options={{
                    animation: 'slide_from_right'
                }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}