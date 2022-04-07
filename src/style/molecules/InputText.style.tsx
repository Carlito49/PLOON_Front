import { StyleSheet, Dimensions } from "react-native";
import Themes from "../Themes";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get('screen').height / 16;

const InputTextStyle = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        width: screenWidth - 40,
        height: screenHeight,
        borderColor: 'black',
        borderRadius: 15,
        paddingHorizontal: 25,
    }
});

export default InputTextStyle;