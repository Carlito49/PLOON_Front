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
                <View style={MyAccountStyle.btn}>
                    <Text>Boutons</Text>
                </View>
            </View>
            <View style={MyAccountStyle.body}>
                <View style={MyAccountStyle.informations}>
                    <View style={MyAccountStyle.user}>
                        <View style={MyAccountStyle.userName}>
                            <Text style={{paddingRight: 8}}>Nom de l'utilisateur</Text>
                            <Text>Prénom de l'utilisateur</Text>
                        </View>
                        <View style={MyAccountStyle.userName}>
                            <Text style={{paddingRight: 8}}>Age de l'utilisateur,</Text>
                            <Text>Lieu de l'utilisateur</Text>
                        </View>
                    </View>
                    <View style={MyAccountStyle.description}>
                        <Text>Description de l'utilisateur</Text>
                    </View>
                </View>
                <View style={MyAccountStyle.centreInterets}>
                    <Text style={MyAccountStyle.subTitle}>Centres Interêts</Text>
                </View>
                <View style={MyAccountStyle.event}>
                    <Text style={MyAccountStyle.subTitle}>Mes événements</Text>
                </View>
                <View style={MyAccountStyle.friends}>
                    <Text style={MyAccountStyle.subTitle}>Amis</Text>
                </View>
            </View>
        </View>
    ) 
};

export default MyAccount;