import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppLinks} from 'appScreen/AppLinks';
import Home from 'appScreen/Home/Class';
import {HomeHooks} from 'appScreen/Home/Hooks';
import Messages from 'appScreen/Messages/Class';
import {MessagesHooks} from 'appScreen/Messages/Hooks';
import {Routes} from 'appEnum';
import Login from 'appScreen/Login/Class';
import {LoginHooks} from 'appScreen/Login/Hooks';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Routes.AppLinks} component={AppLinks} />
          <Stack.Screen name={Routes.Messages} component={Messages} />
          <Stack.Screen name={Routes.MessagesHooks} component={MessagesHooks} />
          <Stack.Screen name={Routes.Home} component={Home} />
          <Stack.Screen name={Routes.HomeHooks} component={HomeHooks} />
          <Stack.Screen name={Routes.Login} component={Login} />
          <Stack.Screen name={Routes.LoginHooks} component={LoginHooks} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
