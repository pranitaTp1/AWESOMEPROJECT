import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import React from "react";
import MealList from "../components/MealList/MealList";

const FavoritesScreen = () => {
    const favoriteMealIds: string[] = useSelector((state) => state.favoriteMeals.ids);
    const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal?.id));
    if (favoriteMealIds.length === 0) {
        return <View style={styles.rootContainer}><Text style={styles.text}>You have no favorite meals yet.</Text></View>
    }
    return <MealList items={favoriteMeals} />
};
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        color: 'white'
    }
});
export default FavoritesScreen;