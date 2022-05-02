import React from "react";
import { View, ImageBackground } from 'react-native';
import MyEventHeaderStyle from '../../style/molecules/MyEventHeader.style';
import AjoutBtn from '../molecules/AjoutBtn';
import CreateEventBtn from "./CreateEventBtn";

const MyEventHeader: React.FunctionComponent = () => {
    return (
        <ImageBackground source={require('../../../assets/images/rencontreResto.jpg')} style={MyEventHeaderStyle.header} imageStyle={MyEventHeaderStyle.imgStyle}>
            <View style={MyEventHeaderStyle.ajoutBtnStyle}>
                <AjoutBtn />     
            </View>
            <View style={MyEventHeaderStyle.dateStyle}>
                <CreateEventBtn>
                    Date
                </CreateEventBtn>
            </View>
        </ImageBackground>
    )
};

export default MyEventHeader;