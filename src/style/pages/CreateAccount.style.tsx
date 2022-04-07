import { StyleSheet } from "react-native";

const CreateAccountStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        flex: 1.3,
        justifyContent: 'center',
    },
    inputMargin: {
        marginVertical: 10
    },
    validationStyle: {
        marginBottom: 10,
        width: '55%',
        alignItems: 'center'
    },
    lienStyle: {
        marginTop: 8
    },
    inputText: {
        marginBottom: 30
    },
    inputPässword: {
        marginBottom: 10
    },
    subTitle: {
        alignItems: 'flex-start',
        marginLeft: 20,
    },
    text: {
        fontSize: 20
    },
    btn: {
        flex: 0.5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
});

export default CreateAccountStyle;