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
                drawerContentStyle:{backgroundColor: '#351401'},
                drawerInactiveTintColor:'white',
                drawerActiveTintColor:'#351401',
                drawerActiveBackgroundColor:'#e4baa1'
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