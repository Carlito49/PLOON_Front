import React, { useEffect } from "react";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import { View, Button } from 'react-native';
import AccueilStyle from '../style/Accueil.style';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RouteParams } from "../navigation/RootNavigator";

interface AccueilProps
{
    
}

const Accueil: React.FunctionComponent<AccueilProps> = () => {
    const route = useRoute<RouteProp<RouteParams>>();
    const navigation = useNavigation();

    const onPressProfile = () => {
        navigation.navigate("Profile" as never);
    }

    return (
        <View style={AccueilStyle.container}>
            <Header />
            <View style={AccueilStyle.body}>
                <Button title="Aller à la page Profile" onPress={onPressProfile}/>
            </View>
            <Footer />
        </View>
    );
}

export default Accueil;