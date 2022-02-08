import React from "react";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import { View } from 'react-native';
import AccueilStyle from '../style/Accueil.style';

interface Props
{
    
}

const Accueil = (props: Props) => {
    return (
        <View style={AccueilStyle.container}>
            <View>
                <Header />
            </View>
            <View>
                
            </View>
            <View>
                <Footer />
            </View>
        </View>
    );
}

export default Accueil;