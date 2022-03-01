import React from "react";
import { View } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import HomeTemplateStyle from "../../style/templates/HomeTemplate.style"

type Props = {
    children: React.ReactNode
}
const HomeTemplate: React.FunctionComponent<Props> = (props: Props) => {
    return(
        <View style={HomeTemplateStyle.container}>
            <View style={HomeTemplateStyle.headerView}>
                <Header />
            </View>
            <View style={HomeTemplateStyle.bodyView}>
                {props.children}
            </View>
            <View style={HomeTemplateStyle.footerView}>
                <Footer />
            </View>
        </View>
    )
};

export default HomeTemplate;