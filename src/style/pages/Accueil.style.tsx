import React from "react";
import { StyleSheet } from 'react-native'

const AccueilStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        flex: 0.5, 
        justifyContent: 'flex-end'
    },
    input: {
        flex: 1,
        justifyContent: 'center',
        marginVertical: 5
    },
    inputMargin: {
        marginVertical: 5
    },
    btn: {
        flex: 0.5,
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    }
});

export default AccueilStyle;