import { StyleSheet, Text, View } from "react-native"

const SubTitle = ({children}) =>{
    return(
        <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{children}:</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    subTitleContainer:{
        margin:4,
        padding:6,
        borderBottomColor:'white',
        borderBottomWidth:2
    },
    subTitle: {
        color:'#e2b497',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
      
    },
});
export default SubTitle;