import React from "react";
import { Alert, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

type IconButtonProps = {
    onPress: () => void,
    icon:string,
    color:string
}
const IconButton = ({icon,color,onPress}:IconButtonProps) => {
    const myIcon =  <MaterialIcons name={icon} color={color} size={25} />
    return (<Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
        {myIcon}
    </Pressable>)
};
const styles = StyleSheet.create({
pressed:{
    opacity:0.7
}
});
export default IconButton;  