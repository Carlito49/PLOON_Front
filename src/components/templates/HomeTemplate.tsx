import React from "react";
import { View } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
    children: React.ReactNode
}
const HomeTemplate: React.FunctionComponent<Props> = (props: Props) => {
    return(
        <View style={{height: '100%', width: '100%', backgroundColor: 'green'}}>
            <View style={{height: '25%'}}>
                <Header />
            </View>
            <View style={{height: '50%'}}>
                {props.children}
            </View>
            <View style={{height: '25%'}}>
                <Footer />
            </View>
        </View>
    )
};

export default HomeTemplate;