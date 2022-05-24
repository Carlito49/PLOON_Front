import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get('screen').height / 16;

const InputSearchStyle = StyleSheet.create({
    container: {
        borderWidth: 3,
        width: screenWidth - 40,
        height: screenHeight,
        borderColor: 'orange',
        borderRadius: 30,
        flexDirection: 'row'
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8
    },
    input: {
        flex: 8,
        borderRadius: 30,
        justifyContent: 'center',
        paddingLeft: 10
    }
});

export default InputSearchStyle;