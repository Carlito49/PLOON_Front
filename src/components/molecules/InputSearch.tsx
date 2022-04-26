import React from "react";
import { TextInput, View } from "react-native";
import InputSearchStyle from "../../style/molecules/InputSearch.style";

interface InputTextProps
{
    placeholder?: string;
    onChangeText: (text: string) => void;
    value?: string;
}

const InputText: React.FunctionComponent<InputTextProps> = (props) => {
    return(
        <View>
            <TextInput placeholder={props.placeholder} onChangeText={props.onChangeText} style={InputSearchStyle.container} value={props.value}/>
        </View>
        
    );
}

export default InputText;