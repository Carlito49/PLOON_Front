import React from "react";
import { StyleSheet } from 'react-native'

const AccueilStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    inputMargin: {
        marginVertical: 5,
        backgroundColor: 'red'
    },
    btn: {
        flex: 0.5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    validationBtnStyle: {
        marginBottom: 10,
        width: '40%',
        alignItems: 'center',
    },
    lienStyle: {
        marginTop: 8
    },
    subTitle: {
        backgroundColor: 'yellow',
        alignItems: 'center'
    }
});

export default AccueilStyle;