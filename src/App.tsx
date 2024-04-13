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
  StyleSheet, View,
} from 'react-native';

import 'react-native-gesture-handler';
import RootNavigator from './navigation/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={"light-content"}
        showHideTransition={"slide"}
        hidden={false}
      />
      <View style={styles.container}>
        <Provider store={store}>
        <RootNavigator />
        </Provider>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default App;
