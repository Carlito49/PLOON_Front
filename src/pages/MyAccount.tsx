import React, { useEffect } from "react";
import { View, Text, Image } from 'react-native';
import MyAccountStyle from "../style/pages/MyAccount.style";

const MyAccount: React.FunctionComponent = () => {

    useEffect(() => {

    }, [])

    return (
        <View style={MyAccountStyle.container}>
            <View style={MyAccountStyle.header}>
                {/* <Image /> */}
                <View style={MyAccountStyle.img}>
                    <Text>Photo de profil</Text>
                </View>
                <View style={MyAccountStyle.profil}>
                    <Text>Nom de profil</Text>
                </View>
            </View>
            <View style={MyAccountStyle.body}>
                <View style={MyAccountStyle.informations}>
                    <View style={MyAccountStyle.userName}>
                        <Text>Nom de l'utilisateur</Text>
                    </View>
                    <View style={MyAccountStyle.userName}>
                        <Text>Prénom de l'utilisateur</Text>
                    </View>
                    <View style={MyAccountStyle.userName}>
                        <Text>Numéro de l'utilisateur</Text>
                    </View>
                </View>
                <View style={MyAccountStyle.btns}>
                    <Text>Buttons</Text>
                </View>
            </View>
        </View>
    ) 
};

export default MyAccount;