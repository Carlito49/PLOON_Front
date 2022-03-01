import React from "react";
import { Text } from "react-native";
import TitleStyle from '../../style/molecules/Title.style'

type TitleProps = {
    children: React.ReactNode
}

const Title: React.FunctionComponent<TitleProps> = (props: TitleProps) => {
    return(
        <Text style={TitleStyle.text}>
            {props.children}
        </Text>
    )
}

export default Title;