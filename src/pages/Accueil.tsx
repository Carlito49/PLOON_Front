import React, { useState } from "react";
import { View, Text } from 'react-native';
import AccueilStyle from '../style/pages/Accueil.style';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RouteParams } from "../navigation/RootNavigator";
import InputText from "../components/molecules/InputText";
import HomeTemplate from '../components/templates/HomeTemplate';
import Title from '../components/molecules/Title';
import ValidationButton from "../components/molecules/ValidationButton";
import Lien from "../components/molecules/Lien";

const Accueil: React.FunctionComponent = () => {
    const route = useRoute<RouteProp<RouteParams>>();
    const navigation = useNavigation();

    const [text, setText] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onPress = () => {

        fetch('http://localhost:3000/user', {mode: 'no-cors'})
        .then((response) => {
            console.log(response[0]);
        })
        .catch(() => {
            console.log('Une erreur s\'est produite');
        })
    }

    const createAccount = () => {
        navigation.navigate('CreateAccount' as never);
    }

    return (
        <HomeTemplate>
            <View style={AccueilStyle.container}>
                <View style={AccueilStyle.input}>
                    <View style={AccueilStyle.inputMargin}>
                        <View style={AccueilStyle.subTitle}>
                            <Text>
                                Nom d'utilisateur
                            </Text>
                        </View>
                        <View>
                            <InputText placeholder="Entrez votre nom d'utilisateur" onChangeText={(text) => setText(text)} value={text} secureTextEntry={false}/>
                        </View>
                    </View>
                    <View style={AccueilStyle.inputMargin}>
                        <InputText placeholder="Entrez votre mot de passe" onChangeText={(password) => setPassword(password)} value={password} secureTextEntry={true}/>
                    </View>
                </View>
                <View style={AccueilStyle.btn}>
                    <View style={AccueilStyle.validationBtnStyle}>
                        <ValidationButton onPress={onPress}>
                            Se Connecter
                        </ValidationButton>
                    </View>
                    <View style={AccueilStyle.lienStyle}>
                        <Lien onPress={createAccount}>
                            Pas encore de compte? Créez-en un !
                        </Lien>
                    </View>
                </View>
            </View>
        </HomeTemplate>
    );
}

export default Accueil;