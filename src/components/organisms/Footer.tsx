import React from "react";
import HomeButton from '../atoms/HomeButton'
import { View, Text } from "react-native";
import FooterStyle from '../../style/Footer.style'

const Footer = () => {

    return(
        <View style={FooterStyle.container}>
            <View style={FooterStyle.bGgreen}>
                <HomeButton />
            </View>
            <View style={FooterStyle.bGorange}>
                <Text>AZERTY</Text>
            </View>
            <View style={FooterStyle.bGblue}>
                <Text>CACA</Text>
            </View>
        </View>
    );
}

export default Footer;