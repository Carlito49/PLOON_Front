import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyAccount from "../pages/MyAccount";

const App = createNativeStackNavigator();

const AccountNavigator: React.FunctionComponent = () => {
    return (
        <App.Navigator screenOptions={{headerShown: false}}>
            <App.Screen 
                name="MyAccount"
                component={MyAccount}
            />
        </App.Navigator>
    )
};

export default AccountNavigator;