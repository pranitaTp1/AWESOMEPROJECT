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
    <Text>Hello World!!</Text>
    <CategoryScreen/>
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
