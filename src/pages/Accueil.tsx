import React, { useState } from "react";
import { View, Text } from 'react-native';
import AccueilStyle from '../style/pages/Accueil.style';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RouteParams } from "../navigation/RootNavigator";
import InputText from "../components/molecules/InputText";
import HomeTemplate from '../components/templates/HomeTemplate';
import ValidationButton from "../components/molecules/ValidationButton";
import Lien from "../components/molecules/Lien";
import IconComponent from "../components/atoms/IconComponent";

const Accueil: React.FunctionComponent = () => {
    const route = useRoute<RouteProp<RouteParams>>();
    const navigation = useNavigation();

    const [text, setText] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const toEvent = () => {
        navigation.navigate('Event' as never);
    }

    const toCreateAccount = () => {
        navigation.navigate('CreateAccount' as never);
    }

    return (
        <HomeTemplate>
            <View style={AccueilStyle.container}>
                <View style={AccueilStyle.input}>
                    <View style={AccueilStyle.inputMargin}>
                        <View style={AccueilStyle.subTitle}>
                            <Text style={AccueilStyle.text}>
                                Nom d'utilisateur :
                            </Text>
                        </View>
                        <View style={AccueilStyle.inputText}>
                            <InputText placeholder="Entrez votre nom d'utilisateur" onChangeText={(text) => setText(text)} value={text} secureTextEntry={false}/>
                        </View>
                        <View style={AccueilStyle.subTitle}>
                            <Text style={AccueilStyle.text}>
                                Mot de passe :
                            </Text>
                        </View>
                        <View style={AccueilStyle.inputPassword}>
                            <InputText placeholder="Entrez votre mot de passe" onChangeText={(password) => setPassword(password)} value={password} secureTextEntry={true}/>
                        </View>
                        <View style={AccueilStyle.forgotPassword}>
                            <Lien onPress={toCreateAccount}>
                                Mot de passe oublié ?
                            </Lien>
                        </View>
                    </View>
                </View>
                <View style={AccueilStyle.btn}>
                    <View style={AccueilStyle.validationBtnStyle}>
                        <ValidationButton onPress={toEvent}>
                            Se Connecter
                        </ValidationButton>
                    </View>
                    <View style={AccueilStyle.lienStyle}>
                        <Lien onPress={toCreateAccount}>
                            Pas encore de compte? Créez-en un !
                        </Lien>
                    </View>
                </View>
            </View>
        </HomeTemplate>
    );
}

export default Accueil;