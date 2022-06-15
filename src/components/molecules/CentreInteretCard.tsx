import React from "react";
import { View, Text, ImageBackground, Image } from 'react-native';
import CentreInteretCardStyle from '../../style/molecules/CentreInteretCard.style';

type Props = {
    children: React.ReactNode;
    imgBackground?: string;
    img?: string;
}


const EventCard: React.FunctionComponent<Props> = (props: Props) => {

    // const getImgBackground = (img: string) => {
    //     let imageBackground: string;
    //     switch(img) {
    //         case 'cinema' :
    //             imageBackground = '../../../assets/images/cinema.jpg';
    //             break;
    //         default:
    //             imageBackground = img;
    //             break;
    //     }
    //     console.log(imageBackground)
    //     return imageBackground;
    // }
    
    // const getImg = (img: string) => {
    //     let image: string;
    //     switch(img) {
    //         case 'cinema' :
    //             image = '../../../assets/images/songoku.jpg'
    //             break;
    //         default:
    //             image = img;
    //             break;
    //     }
    //     return image;
    // }

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