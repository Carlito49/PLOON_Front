import React from "react";
import { StyleSheet } from 'react-native'

const AccueilStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    inputMargin: {
        marginVertical: 10,
    },
    btn: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginBottom: 30,
    },
    validationBtnStyle: {
        flex: 1,
        width: '80%',
        alignItems: 'center',
    },
    lienStyle: {
        marginTop: 8,
        flex: 0.5
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
    inputPassword: {
        marginBottom: 10
    },
    forgotPassword: {
        marginStart: 10
    }
});

export default AccueilStyle;