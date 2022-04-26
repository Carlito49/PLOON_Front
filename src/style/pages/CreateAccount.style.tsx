import { StyleSheet } from "react-native";

const CreateAccountStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        flex: 4,
        justifyContent: 'center',
    },
    inputMargin: {
        marginVertical: 10
    },
    validationStyle: {
        width: '80%',
        height: '50%',
        flex: 1,
        backgroundColor: 'blue'
    },
    lienStyle: {
        marginTop: 8,
        flex: 1
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
        backgroundColor: 'red'
    },
});

export default CreateAccountStyle;