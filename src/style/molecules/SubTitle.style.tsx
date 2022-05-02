import { StyleSheet } from "react-native";

const SubTitleStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    lien: {
        opacity: 0.5,
    }
});

export default SubTitleStyle;