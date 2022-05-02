import { StyleSheet } from "react-native";

const EventCardStyle = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 3,
        borderRadius: 6,
        borderColor: 'transparent'
    },
    imgBack: {
        borderRadius: 6
    },
    img: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'transparent'
    },
    textAlign: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    imgStyle: {
        width: '50%',
        height: '80%',
        alignSelf: 'center',
    }
});

export default EventCardStyle;