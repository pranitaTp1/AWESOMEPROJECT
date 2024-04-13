import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

const MealList = ({ items }) => {
    const navigation = useNavigation();
    const renderMealItem = ({ item }) => {
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        };
        return <MealItem navigation={navigation} {...mealItemProps} />
    };
    return (<View>
        <FlatList data={items} renderItem={renderMealItem} />
    </View>)
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});
export default MealList;