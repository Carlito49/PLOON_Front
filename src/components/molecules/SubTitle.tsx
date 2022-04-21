import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SubTitleStyle from '../../style/molecules/SubTitle.style';

type Props = {
    children: React.ReactNode;
}

const SubTitle: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <View style={SubTitleStyle.container}>
            <View>
                {props.children}
            </View>
            <TouchableOpacity>
                Voir plus
            </TouchableOpacity>
        </View>
    )
};

export default SubTitle;