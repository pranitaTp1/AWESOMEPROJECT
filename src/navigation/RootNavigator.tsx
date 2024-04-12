
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import CategoryScreen from '../screens/CategoryScreen';
import MealsOverViewScreen from '../screens/MealsOverViewScreen';
import MealsDetailsScreen from '../screens/MealsDetailsScreen';

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white', contentStyle: { backgroundColor: '#3f2f25' } }}>
            <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="MealCategories" component={CategoryScreen} options={{ title: 'All Categories' }} />
            <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />
            <Stack.Screen name="MealsDetailsScreen" component={MealsDetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default RootNavigator;