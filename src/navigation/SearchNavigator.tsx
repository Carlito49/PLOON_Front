import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchEvent from "../pages/SearchEvent";

const App = createNativeStackNavigator();

const SearchNavigator: React.FunctionComponent = () => {
    return (
        <App.Navigator>
            <App.Screen 
                name="SearchEvent"
                component={SearchEvent}
                options={{
                    
                }}
            />
        </App.Navigator>
    )
};

export default SearchNavigator;