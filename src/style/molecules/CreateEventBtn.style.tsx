import { StyleSheet } from "react-native";

const CreateEventBtnStyle = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: 'orange',
        backgroundColor: 'orange'
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    }
});

export default CreateEventBtnStyle;