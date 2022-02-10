import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const FooterStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bgOrange: {
        backgroundColor: 'orange'
    },
    bgYellow: {
        backgroundColor: 'yellow'
    },
    bgRed: {
        backgroundColor: 'red'
    },
    btn: {
        backgroundColor: 'purple',
        width: Dimensions.get('screen').width / 3,
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white'
    }
});

export default FooterStyle;