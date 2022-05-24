import React from "react";
import HomeButton from '../molecules/HomeButton'
import { View, TouchableOpacity } from "react-native";
import FooterStyle from "../../style/organisms/Footer.style";
import TabNavigator from "../../navigation/TabNavigator";

const Footer: React.FunctionComponent = () => {
    
    const onBtn = () => {
        console.log('btn push!!!!!!!!')
    }

    return(
        <View style={FooterStyle.container}>
            <TabNavigator />
        </View>   
    );
}

export default Footer;