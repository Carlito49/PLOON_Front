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
        marginVertical: 10,
    },
    btn: {
        flex: 0.5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    validationBtnStyle: {
        marginBottom: 10,
        width: '55%',
        alignItems: 'center',
    },
    lienStyle: {
        marginTop: 8
    },
    subTitle: {
        alignItems: 'flex-start',
        marginLeft: 20,
    },
    text: {
        fontSize: 20
    },
    inputText: {
        marginBottom: 30
    },
    inputPässword: {
        marginBottom: 10
    },
    forgotPassword: {
        marginStart: 10
    }
});

export default AccueilStyle;