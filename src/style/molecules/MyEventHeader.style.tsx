import { StyleSheet } from "react-native";

const MyEventHeaderStyle = StyleSheet.create({
    header: {
        flex: 1
    },
    imgStyle: {
        borderRadius: 14
    },
    ajoutBtnStyle: {
        flex: 1,
        alignItems: 'flex-end',
        margin: 10,
    },
    dateStyle: {
        flex: 1,
        width: '20%',
        margin: 5,
    },
    body: {
        flex: 1.5
    }
});

export default MyEventHeaderStyle;