import React, { useState } from "react";
import { View } from "react-native";
import InputSearch from "../components/molecules/InputSearch";
import SubTitle from "../components/molecules/SubTitle";
import CreateEvent from "../components/organisms/CreateEvent";
import EventTemplate from "../components/templates/EventTemplate";
import EventStyle from "../style/pages/Event.style";
import CentreInteretCard from '../components/molecules/CentreInteretCard';
import MyEvent from '../components/organisms/MyEvent';
import IconList from "../core/type/IconList";

const Event: React.FunctionComponent = () => {

    const onPress = () => {}

    const [search, setSearch] = useState<string>('');

    return (
        <EventTemplate>
            <View style={EventStyle.body}>
                <View style={EventStyle.input}>
                    <InputSearch onChangeText={(search) => setSearch(search)} value={search} icon={IconList.Search} placeholder="Rechercher un événement"/>
                </View>
                <View style={EventStyle.createEvent}>
                    <CreateEvent />
                </View>
                <View style={EventStyle.centreInterets}>
                    <View style={EventStyle.subTitle}>
                        <SubTitle onPress={onPress}>
                            Centres d'intéret
                        </SubTitle>
                    </View>
                    <View style={EventStyle.listView}>
                        <View style={EventStyle.card}>
                            <CentreInteretCard>
                                Cinéma
                            </CentreInteretCard>
                        </View>
                    </View>
                </View>
                <View style={EventStyle.myEventStyle}>
                    <View style={EventStyle.subTitleEvent}>
                        <SubTitle onPress={onPress}>
                            Evénement
                        </SubTitle>
                    </View>
                    <View style={EventStyle.myEventCardStyle}>
                        <MyEvent />
                    </View>
                </View>
            </View>
        </EventTemplate>
    )
};

export default Event;