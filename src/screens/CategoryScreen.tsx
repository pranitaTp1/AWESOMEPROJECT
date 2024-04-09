import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

const CategoryScreen = ({navigation}) => {

   
    const renderCategoryItem = ({ item }) => {
        const pressHandler = () => {
            navigation.navigate('MealsOverView',{categoryId:item?.id});
        };
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
