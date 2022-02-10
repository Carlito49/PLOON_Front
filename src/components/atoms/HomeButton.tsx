import React from "react";
import { View } from 'react-native'
import HomeButtonStyle from '../../style/HomeButton.style'
import { Entypo } from '@expo/vector-icons'

const HomeButton: React.FunctionComponent = () => {
    return (
        <View>
            <View>
            <Entypo name='home' style={HomeButtonStyle.image} size={40} />
            </View>
        </View>
    );
}

export default HomeButton;
