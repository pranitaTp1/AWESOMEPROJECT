import { FlatList, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverViewScreen = ({ route }) => {
    const categoryId = route?.params?.categoryId;

    const mealsDetails = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    const renderMealItem = ({ item }) => {
        const mealItemProps = {
            title: item?.title,
            imageUrl: item?.imageUrl,
            duration: item?.duration,
            complexity: item?.complexity,
            affordability: item?.affordability
        }
        return <MealItem {...mealItemProps} />
    };

    return <View style={styles.container}>
        <FlatList
            data={mealsDetails}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem} />
    </View>
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }

});
export default MealsOverViewScreen;