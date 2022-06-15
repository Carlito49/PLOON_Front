import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from '../pages/Accueil';
import CreateAccount from '../pages/CreateAccount';

const AccueilNavigator: React.FunctionComponent = () => {

    const App = createNativeStackNavigator();

    return (
        <App.Navigator>
            <App.Screen 
                name="Accueil" 
                component={Accueil}
                options={{
                    headerShown: false
                }} 
                
                />
                <App.Screen 
                name="CreateAccount"
                component={CreateAccount}
                options={{
                    animation: 'slide_from_right',
                    headerTitleAlign: 'center',
                    title: "Créer un compte"
                }}
                />
        </App.Navigator>
    )
};

export default AccueilNavigator;