import { Image, Pressable, StyleSheet, Text, View } from "react-native"

type MealItemProps = {
    title:string,
    imageUrl: string,
    duration:number,
    complexity: string,
    affordability: string

}

const MealItem = ({title,imageUrl,duration,complexity,affordability}:MealItemProps) => {
    return <View style={styles.mealItem}>
        <Pressable>
            <View>
                <Image source={{uri:imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.details}>{duration}</Text>
                <Text style={styles.details}>{complexity.toUpperCase()}</Text>
                <Text style={styles.details}>{affordability.toUpperCase()}</Text>
            </View>
        </Pressable>
        </View>
}
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200
    },
    title: {
        fontSize:20,
        fontFamily:'700',
        color:'black',
        textAlign:'center',
        padding:8
    },
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'white'
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:8
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12
    }
})
export default MealItem;