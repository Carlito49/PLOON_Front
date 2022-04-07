import React from "react";
import { StyleSheet } from "react-native";

const HomeTemplateStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    footerView: {
        flex: 0.5
    },
    bodyView: {
        flex: 4,
    }
});

export default HomeTemplateStyle;
