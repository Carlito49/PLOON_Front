import React from 'react'
import { View, Image } from 'react-native'
import HeaderStyle from '../../style/templates/Header.style';

const Header: React.FunctionComponent = () => {
    return(
        <View style={HeaderStyle.container}>
            <Image source={require('../../../assets/images/ploonLogo.png')} style={HeaderStyle.image}/>
        </View>
    );
}

export default Header;