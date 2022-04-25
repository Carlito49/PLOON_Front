import { StyleSheet } from "react-native";

const CreateAccountStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        flex: 6,
        justifyContent: 'center',
    },
    inputMargin: {
        marginVertical: 10
    },
    validationStyle: {
        marginBottom: 5,
        width: '50%',
        height: '50%',
        alignItems: 'center',
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
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
});

export default CreateAccountStyle;