import React from "react";

interface Props{
    image: string;
}

const MyButton = (props: Props) => {
    return (
    <view>
        <button><img src={props.image}/></button>
    </view>
    );
}

export default MyButton;