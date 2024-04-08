import { Pressable, StyleSheet, Text, View } from "react-native";
type props= {
    name: string,
    color:string
}

const CategoryGridTitle = ({name,color}:props) => {
    return <View style={[styles.grid, {backgroundColor:color}]}>
        <Pressable style={styles.button}>
        <View style={styles.innerContainer}>
        <Text style={styles.buttonTxt}>{name}</Text>
        </View>
        </Pressable>
        </View>
};
const styles = StyleSheet.create({
    grid: {
        flex:1,
        flexDirection:'column',
        height:150,
        margin:16,
        width:150,
        borderRadius:8, 
        elevation:4,
        shadowColor:'black'
        },
        button:{
            flex:1
        },
        buttonTxt:{
            color:'white',
            fontSize:16,
            fontWeight:'700'
        },
        innerContainer:{
            flex:1,
            padding:16,
            alignItems:'center',
            justifyContent:'center',
        }
});
export default CategoryGridTitle;