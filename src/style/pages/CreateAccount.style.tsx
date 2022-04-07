import { StyleSheet } from "react-native";

const CreateAccountStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'red'
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    input: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },
    inputMargin: {
        marginVertical: 5
    },
    validationStyle: {
        flex: 0.5,
        marginBottom: 10,
        backgroundColor: 'orange'
    }
});

export default CreateAccountStyle;