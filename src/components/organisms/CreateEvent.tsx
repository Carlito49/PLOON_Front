import React from "react";
import { View, ImageBackground, Text } from 'react-native';
import CreateEventStyle from "../../style/organisms/CreateEvent.style";
import ValidationButton from "../molecules/ValidationButton";

const CreateEvent: React.FunctionComponent = () => {

    const onPress = () => {

    }

    return (
        <View style={CreateEventStyle.container}>
            <ImageBackground source={require('../../../assets/images/songoku.jpg')} style={CreateEventStyle.img} imageStyle={CreateEventStyle.imgStyle}>
                <View style={CreateEventStyle.text}>
                    <Text style={CreateEventStyle.textStyle}>HEHOOOOO</Text>
                </View>
                <View style={CreateEventStyle.btn}>
                    <ValidationButton onPress={onPress}>
                        Créer votre événement
                    </ValidationButton>
                </View>
            </ImageBackground>
        </View>
    )
};

export default CreateEvent;