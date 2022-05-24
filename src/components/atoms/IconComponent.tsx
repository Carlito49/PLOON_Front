import { FunctionComponent } from "react";
import { View } from "react-native";
import IconList from "../../core/type/IconList";
import Home from '../../../assets/svg/Home.svg';
import Plus from '../../../assets/svg/Plus.svg';
import Search from '../../../assets/svg/Search.svg';

const DEFAULT_ICON_SIZE = 25;

type Props = {
    name?: IconList;
    width?: number;
    height?: number;
}

const IconComponent: FunctionComponent<Props> = (props: Props) => {

    function getHeight() {
        return props.height ?? DEFAULT_ICON_SIZE;
    }

    function getWidth() {
        return props.width ?? DEFAULT_ICON_SIZE;
    }

    function getIcon() {
        switch(props.name)
        {
            case IconList.Home: return <Home width={ getWidth() } height={ getHeight() }/>; 
            case IconList.Plus: return <Plus width={ getWidth() } height={ getHeight() }/>; 
            case IconList.Search: return <Search width={ getWidth() } height={ getHeight() }/>
            default: return <View />; 
        }
    }

    return (
        <View>
            { getIcon() }
        </View>
    )
};

export default IconComponent;