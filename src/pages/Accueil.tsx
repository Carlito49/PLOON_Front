import React, { useState, useEffect } from "react";
import { View, Text } from 'react-native';
import AccueilStyle from '../style/pages/Accueil.style';
import { useNavigation } from "@react-navigation/native";
import InputText from "../components/molecules/InputText";
import HomeTemplate from '../components/templates/HomeTemplate';
import ValidationButton from "../components/molecules/ValidationButton";
import Lien from "../components/molecules/Lien";

const Accueil: React.FunctionComponent = () => {

    const navigation = useNavigation();

    let userNames: string[];
    const [text, setText] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [users, setUsers] = useState<string[]>([]);

    const toEvent = () => {
        userNames = [];
        users.map(value => userNames.push(value["nomUtilisateur"]))
        if (userNames.includes(text) && password == "coucou")
        {
            navigation.navigate('BottomNavigator' as never);
        }
        else 
        {
            console.log("Erreur!!")
        }
    }

    const toCreateAccount = () => {
        navigation.navigate('CreateAccount' as never);
    }

    const getUtilisateur = (url: string) => {
        fetch(url)
        .then(response => response.json())
        .then(data => setUsers(data))
        .then(() => console.log(users))
        .catch(() => console.log("L'utilisateur n'existe pas!"))
    }

    useEffect(() => {

        //getUtilisateur(`http://192.168.0.15:3000/user/find`)
        //getUtilisateur(`http://192.168.0.15:3000/user/find/3`)
        getUtilisateur(`http://192.168.0.15:3000/user/findName/QUELLIN`)

    }, [])

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