import { StyleSheet, Text, View } from "react-native";

type MealDetailProps = {
    duration: number,
    complexity: string,
    affordability: string,
    txtStyle?: {}
}
const MealDetail = ({ duration, complexity, affordability, txtStyle }: MealDetailProps) => {
    return <View style={styles.details}>
        <Text style={[styles.details, txtStyle]}>{duration}</Text>
        <Text style={[styles.details, txtStyle]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.details, txtStyle]}>{affordability.toUpperCase()}</Text>
    </View>
};
const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 4
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    }
});
export default MealDetail;