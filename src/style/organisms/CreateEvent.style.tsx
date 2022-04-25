import { StyleSheet } from "react-native";

const CreateEventStyle = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        borderRadius: 10
    },
    img: {
        flex: 1,
    },
    imgStyle: {
        borderRadius: 10,
        resizeMode: 'cover',
        opacity: 1
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    btn: {
        flex: 0.5,
        width: '50%',
        height: '30%',
        backgroundColor: 'red'
    }
});

export default CreateEventStyle;