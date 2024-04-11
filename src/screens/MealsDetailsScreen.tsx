import { Image, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";

const MealsDetailsScreen = ({ route, navigation }) => {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return <View>
        <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image}></Image>
        <Text style={styles.title}>{selectedMeal?.title}</Text>
        {selectedMeal &&
            <MealDetail
                duration={selectedMeal?.duration}
                complexity={selectedMeal?.complexity}
                affordability={selectedMeal?.affordability}
                txtStyle={styles.details} />}
        <SubTitle>Intgredients:</SubTitle>
        <List data={selectedMeal?.ingredients}></List>
        <SubTitle>Steps:</SubTitle>
        <List data={selectedMeal?.steps}></List>
    </View>
};
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    details: {
        color: 'white'
    },
    subTitleContainer: {
        margin: 4,
        padding: 6,
        borderBottomColor: 'white',
        borderBottomWidth: 2
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        padding: 16
    },
});
export default MealsDetailsScreen;