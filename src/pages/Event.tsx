import React, { useState } from "react";
import { View } from "react-native";
import InputSearch from "../components/molecules/InputSearch";
import SubTitle from "../components/molecules/SubTitle";
import CreateEvent from "../components/organisms/CreateEvent";
import EventTemplate from "../components/templates/EventTemplate";
import EventStyle from "../style/pages/Event.style";

const Event: React.FunctionComponent = () => {

    const [search, setSearch] = useState<string>('');

    return (
        <EventTemplate>
            <View style={EventStyle.input}>
                <InputSearch onChangeText={(search) => setSearch(search)} value={search}/>
            </View>
            <View style={EventStyle.body}>
                <View style={EventStyle.createEvent}>
                    <CreateEvent />
                </View>
                <View style={EventStyle.centreInterets}>

                </View>
                <View style={EventStyle.myEvent}>

                </View>
            </View>
        </EventTemplate>
    )
};

export default Event;