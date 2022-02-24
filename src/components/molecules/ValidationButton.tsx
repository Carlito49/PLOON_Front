import React from "react";
import ValidationButtonStyle from "../../style/molecules/ValidationButtonStyle.style";
import { Button, View } from "react-native";

interface ValidationButtonProps
{
    title: string;
}

const ValidationButton: React.FunctionComponent<ValidationButtonProps> = (props) => {
    return (
        <View style={ValidationButtonStyle.btn}>
            <Button title={props.title} />
        </View>
    );
};

export default ValidationButton;