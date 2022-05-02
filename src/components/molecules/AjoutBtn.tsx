import React from "react";
import { TouchableOpacity, Text } from "react-native";
import AjoutBtnStyle from "../../style/molecules/AjoutBtn.style";

const AjoutBtn: React.FunctionComponent = () => {
    return (
        <TouchableOpacity style={AjoutBtnStyle.container}>
            <Text style={AjoutBtnStyle.text}>
                AJOUT
            </Text>
        </TouchableOpacity>
    )
};
   export default AjoutBtn;