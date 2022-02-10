import React from "react";
import HomeButton from '../atoms/HomeButton'
import { View } from "react-native";
import FooterStyle from '../../style/Footer.style'
import { TouchableOpacity } from "react-native-gesture-handler";

const Footer: React.FunctionComponent = () => {

    const onTouchable = () => {
        console.log('Bouton appuyer')
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
        </View>   
    );
}

export default Footer;