import React from "react";
import { View } from 'react-native';
import MyEventStyle from '../../style/organisms/MyEvent.style';
import MyEventHeader from '../molecules/MyEventHeader';
import MyEventFooter from '../molecules/MyEventFooter';

type Props = {

}

const MyEvent: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <View style={MyEventStyle.container}>
            <View style={MyEventStyle.header}>
                <MyEventHeader />
            </View>
            <View style={MyEventStyle.footer}>
                <MyEventFooter title="Mon super événement !"/>
            </View>
        </View>
    )
};

export default MyEvent;