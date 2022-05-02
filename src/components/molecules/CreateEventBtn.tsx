import React, { FunctionComponent } from "react";
import { TouchableOpacity, Text } from "react-native";
import CreateEventBtnStyle from '../../style/molecules/CreateEventBtn.style';

type Props = {
    children: React.ReactNode;
    onPress?: () => void;
}

const CreateEventBtn: FunctionComponent<Props> = (props: Props) => {

    return (
        <TouchableOpacity style={CreateEventBtnStyle.container}>
            <Text onPress={props.onPress} style={CreateEventBtnStyle.text}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
};

export default CreateEventBtn;