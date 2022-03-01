import React from "react";
import { StyleSheet } from "react-native";

const FooterStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        flex: 1,
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
        marginHorizontal: 3
    }
});

export default FooterStyle;