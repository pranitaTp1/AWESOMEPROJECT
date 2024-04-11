import { StyleSheet, Text, View } from "react-native";

const List = ({ data }) => {
    return data.map((item) => {
        return <View style={styles.itemContainer} key={item}>
            <Text style={styles.item}>{item}</Text>
        </View>;
    });
};
const styles = StyleSheet.create({
    item:{
        fontSize:14,
        color:'#f2f2f2',
        paddingHorizontal:8
    },
    itemContainer:{
        marginVertical:4,
    }

});
export default List;

