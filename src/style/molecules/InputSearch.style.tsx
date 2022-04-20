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
        paddingHorizontal: 25,
    }
});

export default InputSearchStyle;