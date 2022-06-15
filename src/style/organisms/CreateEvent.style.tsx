import { StyleSheet } from "react-native";

const CreateEventStyle = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
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
        alignItems: 'center',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        paddingHorizontal: 30,
        textAlign: 'center'
    },
    btn: {
        flex: 0.4,
        width: '50%',
        marginLeft: 170,
        marginBottom: 5
    }
});

export default CreateEventStyle;