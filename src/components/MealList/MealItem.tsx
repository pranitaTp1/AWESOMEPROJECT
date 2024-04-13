import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import MealDetail from "../MealDetail";

type MealItemProps = {
    id: string,
    title: string,
    imageUrl: string,
    duration: number,
    complexity: string,
    affordability: string,
    navigation: any;
}

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability, navigation }: MealItemProps) => {

    const selectMealHandler = () => {
        navigation.navigate("MealsDetailsScreen", { mealId: id });
    };


    return <View style={styles.mealItem}>
        <Pressable onPress={selectMealHandler}>
            <View>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetail duration={duration} complexity={complexity} affordability={affordability} />
        </Pressable>
    </View>
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 20,
        fontFamily: '700',
        color: 'black',
        textAlign: 'center',
        padding: 8
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white'
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})
export default MealItem;