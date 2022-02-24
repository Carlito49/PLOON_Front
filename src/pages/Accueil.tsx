import React, { useEffect, useState } from "react";
import Footer from "../components/templates/Footer";
import Header from "../components/templates/Header";
import { View } from 'react-native';
import AccueilStyle from '../style/pages/Accueil.style';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RouteParams } from "../navigation/RootNavigator";
import InputText from "../components/molecules/InputText"
import ValidationButton from "../components/molecules/ValidationButton"
import HomeTemplate from '../components/templates/HomeTemplate'

interface AccueilProps
{
    
}

const Accueil: React.FunctionComponent<AccueilProps> = () => {
    const route = useRoute<RouteProp<RouteParams>>();
    const navigation = useNavigation();

    const onPressProfile = () => {
        console.log()
    }

    const [text, setText] = useState<string>('Hey!!');

    return (
        // <View style={AccueilStyle.container}>
        //     {/* <Header />
        //     <View style={AccueilStyle.body}>
        //         <View style={AccueilStyle.input}>
        //             <InputText placeholder="Identifiant ou Email" onChangeText={setText}/>
        //         </View>
        //         <View style={AccueilStyle.input}>
        //             <InputText placeholder="Mot de passe" onChangeText={setText}/>
        //         </View>
        //             <ValidationButton title="Valider"/>
        //     </View>
        //     <Footer /> */}
        // </View>
        <HomeTemplate>
            <View style={{backgroundColor: 'yellow', flex: 1}}>

            </View>
        </HomeTemplate>
    );
}

export default Accueil;