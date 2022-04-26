import React from "react";
import { StyleSheet } from "react-native";
import Themes from "../Themes";

const ValidationButtonStyle = StyleSheet.create({
    btn: {
        borderWidth: Themes.default.borderWidth,
        padding: 4,
        borderRadius: 40,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'orange'
    }
});

export default ValidationButtonStyle;