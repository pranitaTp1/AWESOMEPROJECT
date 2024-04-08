import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

const CategoryScreen = ({navigation}) => {

    const pressHandler = () => {
        navigation.navigate('MealsOverView');
    };
    const renderCategoryItem = ({ item }) => {
        return <CategoryGridTitle name={item?.name} color={item?.color} onPress={pressHandler} />
    };

    return <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
    />
};
const styles = StyleSheet.create({

})
export default CategoryScreen;
