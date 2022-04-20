import React from "react";
import { TextInput } from "react-native";
import InputSearchStyle from "../../style/molecules/InputSearch.style";

interface InputTextProps
{
    placeholder?: string;
    onChangeText: (text: string) => void;
    value?: string;
}

const InputText: React.FunctionComponent<InputTextProps> = (props) => {
    return(
        <TextInput placeholder={props.placeholder} onChangeText={props.onChangeText} style={InputSearchStyle.container} value={props.value}/>
    );
}

export default InputText;