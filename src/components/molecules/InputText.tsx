import React from "react";
import { TextInput } from "react-native";
import InputTextStyle from "../../style/molecules/InputText.style"

interface InputTextProps
{
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
    secureTextEntry: boolean;
}

const InputText: React.FunctionComponent<InputTextProps> = (props) => {
    return(
        <TextInput placeholder={props.placeholder} onChangeText={props.onChangeText} style={InputTextStyle.input} value={props.value} secureTextEntry={props.secureTextEntry}/>
    );
}

export default InputText;