import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get('screen').height / 12;

const InputTextStyle = StyleSheet.create({
    input: {
        borderWidth: 5,
        width: screenWidth - 40,
        height: screenHeight,
        borderColor: 'black',
        borderRadius: 15,
        paddingHorizontal: 25,
    }
});

export default InputTextStyle;