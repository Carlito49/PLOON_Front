import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import IconList from "../../core/type/IconList";
import AjoutBtnStyle from "../../style/molecules/AjoutBtn.style";
import IconComponent from "../atoms/IconComponent";

const AjoutBtn: React.FunctionComponent = () => {

    return (
        <TouchableOpacity style={AjoutBtnStyle.container}>
            <IconComponent name={IconList.Plus} />
        </TouchableOpacity>
    )
};
   export default AjoutBtn;