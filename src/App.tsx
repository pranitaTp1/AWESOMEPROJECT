/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet, Text, View,
} from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';

const Stack = createNativeStackNavigator();
const App = (): React.JSX.Element =>  {
 
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar
      animated={true}
      backgroundColor="#61dafb"
      barStyle={"dark-content"}
      showHideTransition={"slide"}
      hidden={false}
    />
   <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#351401'},headerTintColor:'white',contentStyle:{backgroundColor:'#3f2f25'}}}>
      <Stack.Screen name="MealCategories" component={CategoryScreen} options={{title:'All Categories'}}/>
      <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
  flex:1,
  backgroundColor:'#fff',
}
});

export default App;
