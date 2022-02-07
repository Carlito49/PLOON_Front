import React from "react";
import HomeButton from '../atoms/HomeButton'
import { View } from "react-native";
import FooterStyle from '../../style/Footer.style'

const Footer = () => {
    return(
        <View style={FooterStyle.container}>
            <HomeButton />
        </View>
    );
}

export default Footer;