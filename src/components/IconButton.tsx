import React from "react";
import { Pressable } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const IconButton = () => {
    const myIcon =  <MaterialIcons name='favorite' color='white' size={25} />
    return (<Pressable>
        {myIcon}
    </Pressable>)
};
export default IconButton;  