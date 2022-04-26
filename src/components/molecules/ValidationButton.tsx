import React from "react";
import ValidationButtonStyle from "../../style/molecules/ValidationButton.style";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

interface ValidationButtonProps
{
    children: React.ReactNode;
    onPress: () => void;
}

const ValidationButton: React.FunctionComponent<ValidationButtonProps> = (props: ValidationButtonProps) => {
    return (
        <TouchableOpacity style={ValidationButtonStyle.btn}>
            <Text onPress={props.onPress} style={ValidationButtonStyle.text}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

export default ValidationButton;