import type {Node} from 'react';
import React from 'react';
import {
  ActivityIndicator,
  Linking,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {Login} from './app/Login';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './app/Home';
import {Confirm} from './app/Confirm';

const Stack = createStackNavigator();

const App: () => Node = () => {
  const linking = {
    prefixes: ['deeplinkapp://'],
    config: {
      initialRouteName: 'Home',
      screens: {
        Home: {
          path: 'home',
        },
        Confirm: {
          path: 'confirm/:confirmEmail',
        },
      },
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="#fff" />
      <NavigationContainer
        linking={linking}
        fallback={<ActivityIndicator color="#000" size="large" />}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Confirm" component={Confirm} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default App;
