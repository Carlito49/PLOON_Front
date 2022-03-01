import React, { useState } from "react";
import { View } from 'react-native';
import AccueilStyle from '../style/pages/Accueil.style';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RouteParams } from "../navigation/RootNavigator";
import InputText from "../components/molecules/InputText";
import HomeTemplate from '../components/templates/HomeTemplate';
import Title from '../components/molecules/Title';
import ValidationButton from "../components/molecules/ValidationButton"

const Accueil: React.FunctionComponent = () => {
    const route = useRoute<RouteProp<RouteParams>>();
    const navigation = useNavigation();

    const [text, setText] = useState<string>(null);
    const [password, setPassword] = useState<string>(null);

    const onPress = () => {

    }

    return (
        <HomeTemplate>
            <View style={AccueilStyle.container}>
                <View style={AccueilStyle.title}>
                    <Title>
                        Connexion
                    </Title>
                </View>
                <View style={AccueilStyle.input}>
                    <View style={AccueilStyle.inputMargin}>
                        <InputText placeholder="Username" onChangeText={(text) => setText(text)} value={text} secureTextEntry={false}/>
                    </View>
                    <View style={AccueilStyle.inputMargin}>
                        <InputText placeholder="Password" onChangeText={(password) => setPassword(password)} value={password} secureTextEntry={true}/>
                    </View>
                </View>
                <View style={AccueilStyle.btn}>
                    <ValidationButton onPress={onPress}>
                        Valider
                    </ValidationButton>
                </View>
            </View>
        </HomeTemplate>
    );
}

export default Accueil;