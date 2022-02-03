import React from "react";
import Footer from "./Footer";
import { View } from 'react-native'

interface Props{
    bonjour: string;
}

const Accueil = (props: Props) => {
    return (
        <View>
            <Footer />
        </View>
    );
}

export default Accueil;