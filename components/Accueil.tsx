import React from "react";
import { View } from 'react-native'
import Footer from "./Footer";

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