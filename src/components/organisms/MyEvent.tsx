import React from "react";
import { View } from 'react-native';
import MyEventStyle from '../../style/organisms/MyEvent.style';
import MyEventHeader from '../molecules/MyEventHeader';

type Props = {

}

const MyEvent: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <View style={MyEventStyle.container}>
            <View style={MyEventStyle.header}>
                <MyEventHeader>
                    
                </MyEventHeader>
            </View>
            <View style={MyEventStyle.footer}>

            </View>
        </View>
    )
};

export default MyEvent;