import React from "react";
import HomeButtonStyle from '../../style/molecules/HomeButton.style'
import { Entypo } from '@expo/vector-icons'

const HomeButton: React.FunctionComponent = () => {
    return (
        <Entypo name='home' style={HomeButtonStyle.image} size={40} />
    );
}

export default HomeButton;
