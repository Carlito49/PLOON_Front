import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import MyEventFooterStyle from '../../style/molecules/MyEventFooter.style';
import IconComponent from '../atoms/IconComponent';
import IconList from '../../core/type/IconList';
import CreateEventBtn from "./CreateEventBtn";

type Props = {
    title?: React.ReactNode;
    lieu?: React.ReactNode;
    invites?: number;
    titleBtn?: () => void;
}

const MyEventFooter: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <View style={MyEventFooterStyle.container}>
            <View style={MyEventFooterStyle.header}>
                <View style={MyEventFooterStyle.textView}>
                    <Text style={MyEventFooterStyle.text}>
                        {props.title}
                    </Text>
                </View>
                <TouchableOpacity style={MyEventFooterStyle.titleBtn} onPress={props.titleBtn}>
                    <IconComponent name={IconList.Plus} />
                </TouchableOpacity>
            </View>
            <View style={MyEventFooterStyle.footer}>
                <View style={MyEventFooterStyle.footerLeft}>
                    <View style={MyEventFooterStyle.subtitle}>
                        <Text style={MyEventFooterStyle.textSubtitle}>
                            {props.lieu ? "A " + props.lieu : "Lieu non précisé"}
                        </Text>
                    </View>
                    <View style={MyEventFooterStyle.centreInteretsView}>
                        <View style={MyEventFooterStyle.centreInteretsBtn}>
                            <CreateEventBtn backgroundColor="red">
                                Musique
                            </CreateEventBtn>
                        </View>
                    </View>
                </View>
                <View style={MyEventFooterStyle.footerRight}>
                    <View style={MyEventFooterStyle.invites}>
                        <View style={MyEventFooterStyle.iconInvites}>
                            <IconComponent name={IconList.Home} />
                        </View>
                        <View style={MyEventFooterStyle.viewInvites}>
                            <Text style={MyEventFooterStyle.textInvites}>
                                {props.invites ? props.invites : 0} Invité{props.invites > 1 ? "s" : ""}
                            </Text>
                        </View>
                    </View>
                    <View style={MyEventFooterStyle.moreBtn}>
                        <CreateEventBtn backgroundColor="orange">
                            En savoir plus
                        </CreateEventBtn>
                    </View>
                </View>
            </View>
        </View>
    )
};

export default MyEventFooter;