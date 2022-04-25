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
            <View style={EventTemplateStyle.header}>

            </View>
            <View style={EventTemplateStyle.body}>
                {props.children}
            </View>
            <View style={EventTemplateStyle.footer}>
                <Footer />
            </View>
        </View>
    )
};

export default EventTemplate;