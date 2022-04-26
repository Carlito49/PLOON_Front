import React from "react";
import { View, ImageBackground, Text } from 'react-native';
import CreateEventStyle from "../../style/organisms/CreateEvent.style";
import CreateEventBtn from "../molecules/CreateEventBtn";

const CreateEvent: React.FunctionComponent = () => {

    const onPress = () => {

    }

    return (
        <View style={CreateEventStyle.container}>
            <ImageBackground source={require('../../../assets/images/rencontreResto.jpg')} style={CreateEventStyle.img} imageStyle={CreateEventStyle.imgStyle}>
                <View style={CreateEventStyle.text}>
                    <Text style={CreateEventStyle.textStyle}>
                        Créer vous même votre propre événement Ploon
                    </Text>
                </View>
                <View style={CreateEventStyle.btn}>
                    <CreateEventBtn onPress={onPress}>
                        Créer votre événement
                    </CreateEventBtn>
                </View>
            </ImageBackground>
        </View>
    )
};

export default CreateEvent;