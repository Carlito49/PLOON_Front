import React from "react";
import { View, Text, ImageBackground, Image } from 'react-native';
import CentreInteretCardStyle from '../../style/molecules/CentreInteretCard.style';

type Props = {
    children: React.ReactNode;
    img?: string;
}

const EventCard: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <ImageBackground style={CentreInteretCardStyle.container} source={require('../../../assets/images/songoku.jpg')} imageStyle={CentreInteretCardStyle.imgBack}>
            <View style={CentreInteretCardStyle.img}>
                <Image source={require('../../../assets/images/cinema.jpg')} style={CentreInteretCardStyle.imgStyle}/>

            </View>
            <View style={CentreInteretCardStyle.textAlign}>
                <Text style={CentreInteretCardStyle.text}>
                    {props.children}
                </Text>   
            </View>
        </ImageBackground>
    )
};

export default EventCard;