import React from "react";
import HomeButton from '../molecules/HomeButton'
import { View, TouchableOpacity } from "react-native";
import FooterStyle from '../../style/templates/Footer.style'

const Footer: React.FunctionComponent = () => {

    const onTouchable = () => {
        
    }

    const onBtn = () => {
        console.log('btn push!!!!!!!!')
    }

    return(
        <View style={FooterStyle.container}>
            <TouchableOpacity style={[FooterStyle.btn, FooterStyle.bgYellow]}>
                <HomeButton />
            </TouchableOpacity>
            <TouchableOpacity onPress={onBtn} style={[FooterStyle.btn, FooterStyle.bgOrange]}>
                <HomeButton />
            </TouchableOpacity>
            <TouchableOpacity onPress={onTouchable} style={[FooterStyle.btn, FooterStyle.bgRed]}>
                <HomeButton />
            </TouchableOpacity>
            <TouchableOpacity onPress={onTouchable} style={[FooterStyle.btn, FooterStyle.bgRed]}>
                <HomeButton />
            </TouchableOpacity>
            <TouchableOpacity onPress={onTouchable} style={[FooterStyle.btn, FooterStyle.bgRed]}>
                <HomeButton />
            </TouchableOpacity>
        </View>   
    );
}

export default Footer;