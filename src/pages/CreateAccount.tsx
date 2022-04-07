import React, { useState } from "react";
import { View, Text } from "react-native";
import CreateAccountStyle from '../style/pages/CreateAccount.style';
import HomeTemplate from "../components/templates/HomeTemplate";
import InputText from "../components/molecules/InputText";
import ValidationButton from "../components/molecules/ValidationButton";
import Lien from "../components/molecules/Lien";
import { useNavigation } from "@react-navigation/native";

const CreateAccount: React.FunctionComponent = () => {
    const navigation = useNavigation();

    const [text, setText] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const validation = () => {
        
    }

    const identification = () => {
        navigation.navigate("Accueil" as never);
    }

    return (
        <HomeTemplate>
            <View style={CreateAccountStyle.container}>
                <View style={CreateAccountStyle.input}>
                    <View style={CreateAccountStyle.inputMargin}>
                        <View style={CreateAccountStyle.subTitle}>
                            <Text style={CreateAccountStyle.text}>
                                Nom d'utilisateur
                            </Text>
                        </View>
                        <View style={CreateAccountStyle.inputText}>
                            <InputText placeholder="Entrez votre nom d'utilisateur" onChangeText={(text) => setText(text)} value={text} secureTextEntry={false}/>
                        </View>
                        <View style={CreateAccountStyle.subTitle}>
                            <Text style={CreateAccountStyle.text}>
                                Adresse Email
                            </Text>
                        </View>
                        <View style={CreateAccountStyle.inputText}>
                            <InputText placeholder="Entrez votre adresse email" onChangeText={(email) => setEmail(email)} value={email} secureTextEntry={false}/>
                        </View>
                        <View style={CreateAccountStyle.subTitle}>
                            <Text style={CreateAccountStyle.text}>
                                Mot de passe
                            </Text>
                        </View>
                        <View style={CreateAccountStyle.inputPässword}>
                            <InputText placeholder="Mot de passe" onChangeText={(password) => setPassword(password)} value={password} secureTextEntry={true}/>
                        </View>
                    </View>
                </View>
                <View style={CreateAccountStyle.btn}>
                    <View style={CreateAccountStyle.validationStyle}>
                        <ValidationButton onPress={validation}>
                            Créer le compte
                        </ValidationButton>
                    </View>
                    <View style={CreateAccountStyle.lienStyle}>
                        <Lien onPress={identification}>
                            Pas encore de compte? Créez-en un !
                        </Lien>
                    </View>
                </View>
            </View>
        </HomeTemplate>
    )
}

export default CreateAccount;