import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoryScreen from "../screens/CategoryScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#351401' },
                headerTintColor: 'white',
                sceneContainerStyle: { backgroundColor: '#3f2f25' },
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoryScreen}
                options={{
                    title: 'All Categories',
                }}
            />
            <Drawer.Screen name="Favorites" component={FavoritesScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;