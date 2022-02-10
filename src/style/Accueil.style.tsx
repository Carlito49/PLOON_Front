import React from "react";
import { StyleSheet } from 'react-native'

const AccueilStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flex: 1
    },
    body: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flex: 0.5,
        alignItems: 'stretch'
    }
});

export default AccueilStyle;