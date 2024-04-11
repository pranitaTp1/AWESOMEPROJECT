import { StyleSheet, Text, View } from "react-native";

const List = ({ data }) => {
    return data.map((item) => {
        return <View style={styles.listItem} key={item}>
            <Text style={styles.item}>{item}</Text>
        </View>;
    });
};
const styles = StyleSheet.create({
    item:{
        fontSize:14,
        color:'#351401',
        paddingHorizontal:8
    },
    listItem:{
        marginVertical:4,
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginHorizontal:12,
        backgroundColor:'#e2b497'
        
    }

});
export default List;

