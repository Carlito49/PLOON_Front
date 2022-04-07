import React, { useState } from "react";
import { View } from "react-native";
import CreateAccountStyle from '../style/pages/CreateAccount.style';
import HomeTemplate from "../components/templates/HomeTemplate";
import Title from "../components/molecules/Title";
import InputText from "../components/molecules/InputText";
import ValidationButton from "../components/molecules/ValidationButton";

const CreateAccount: React.FunctionComponent = () => {

    const [text, setText] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const validation = () => {
        
    }

    return (
        <HomeTemplate>
            <View style={CreateAccountStyle.container}>
                <View style={CreateAccountStyle.title}>
                    <Title>
                        Créer un compte
                    </Title>
                </View>
                <View style={CreateAccountStyle.input}>
                    <View style={CreateAccountStyle.inputMargin}>
                        <InputText placeholder="Nom d'utilisateur" onChangeText={(text) => setText(text)} value={text} secureTextEntry={false}/>
                    </View>
                    <View style={CreateAccountStyle.inputMargin}>
                        <InputText placeholder="Email" onChangeText={(email) => setEmail(email)} value={email} secureTextEntry={false}/>
                    </View>
                    <View style={CreateAccountStyle.inputMargin}>
                        <InputText placeholder="Mot de passe" onChangeText={(password) => setPassword(password)} value={password} secureTextEntry={true}/>
                    </View>
                </View>
                <View style={CreateAccountStyle.validationStyle}>
                    <ValidationButton onPress={validation}>
                        Créer le compte
                    </ValidationButton>
                </View>
            </View>
        </HomeTemplate>
    )
}

export default CreateAccount;