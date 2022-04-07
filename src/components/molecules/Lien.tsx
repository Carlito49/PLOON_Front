import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import LienStyle from '../../style/molecules/Lien.style';

type LienProps = {
    children: React.ReactNode;
    onPress: () => void;
}

const Lien: React.FunctionComponent<LienProps> = (props: LienProps) => {

    return (
        <TouchableOpacity>        
            <Text style={LienStyle.container} onPress={props.onPress}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )

}

export default Lien;