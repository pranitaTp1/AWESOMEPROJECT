import { Alert, FlatList, StyleSheet, Text, View } from "react-native"
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealList/MealItem";
import { useLayoutEffect } from "react";

const MealsOverViewScreen = ({ route, navigation }) => {

    const categoryId = route?.params?.categoryId;

    const mealsDetails = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((item) => item.id === categoryId)?.name;
        navigation.setOptions({
            title: categoryTitle
        })

    }, [navigation, categoryId]);

    const renderMealItem = ({ item }) => {
        const mealItemProps = {
            title: item?.title,
            imageUrl: item?.imageUrl,
            duration: item?.duration,
            complexity: item?.complexity,
            affordability: item?.affordability,
            id: item?.id
        }
        return <MealItem {...mealItemProps} navigation={navigation} />
    };

    return <View style={styles.container}>
        <FlatList
            data={mealsDetails}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem} />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }

});
export default MealsOverViewScreen;