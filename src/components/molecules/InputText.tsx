import React from "react";
import { TextInput } from "react-native";
import InputTextStyle from "../../style/molecules/InputText.style"

interface InputTextProps
{
    placeholder: string;
    onChangeText: (text: string) => void;
}

const InputText: React.FunctionComponent<InputTextProps> = (props) => {
    return(
        <TextInput placeholder={props.placeholder} onChangeText={props.onChangeText} style={InputTextStyle.input} />
    );
}

export default InputText;