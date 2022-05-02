import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SubTitleStyle from '../../style/molecules/SubTitle.style';

type Props = {
    children: React.ReactNode;
    onPress: () => void;
}

const SubTitle: React.FunctionComponent<Props> = (props: Props) => {

    const onPress = () => {

    }

    return (
        <View style={SubTitleStyle.container}>
            <Text style={SubTitleStyle.text}>
                {props.children}
            </Text>
            <TouchableOpacity>
                <Text onPress={props.onPress} style={SubTitleStyle.lien}>
                    Voir plus
                </Text>
            </TouchableOpacity>
        </View>
    )
};

export default SubTitle;