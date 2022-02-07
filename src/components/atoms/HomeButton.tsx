import React from "react";
import { View, Image, TouchableOpacity } from 'react-native'
import HomeButtonStyle from '../../style/HomeButton.style'

const HomeButton = () => {
    return (
    <View style={HomeButtonStyle.btn}>
        <TouchableOpacity>
            <Image source={require('../../../assets/images/home.png')}/>
        </TouchableOpacity>
    </View>
    );
}

export default HomeButton;

