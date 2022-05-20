import React from "react";
import { TextInput, View } from "react-native";
import InputSearchStyle from "../../style/molecules/InputSearch.style";
import IconComponent from '../atoms/IconComponent';
import IconList from "../../core/type/IconList";

interface InputTextProps
{
    placeholder?: string;
    onChangeText: (text: string) => void;
    value?: string;
    children?: React.ReactNode;
    icon?: IconList;
}

const InputText: React.FunctionComponent<InputTextProps> = (props) => {
    return(
        <View style={InputSearchStyle.container}>
            <View style={InputSearchStyle.icon}>
                <IconComponent name={props.icon} />
            </View>
            <View style={InputSearchStyle.input}>
                <TextInput placeholder={props.placeholder} onChangeText={props.onChangeText} value={props.value} />
            </View>
        </View>
        
    );
}

export default InputText;