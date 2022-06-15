import React from "react";
import { View } from "react-native";
import EventTemplateStyle from '../../style/templates/EventTemplate.style';
import Footer from '../organisms/Footer';

type Props = {
    children: React.ReactNode;
}

const EventTemplate: React.FunctionComponent<Props> = (props: Props) => {
    return(
        <View style={EventTemplateStyle.container}>
                {props.children}
        </View>
    )
};

export default EventTemplate;