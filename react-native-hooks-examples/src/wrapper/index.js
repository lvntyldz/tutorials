import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'appScreen/Home/Class';
import {HomeHooks} from 'appScreen/Home/Hooks';
import Messages from 'appScreen/Messages/Class';
import {MessagesHooks} from 'appScreen/Messages/Hooks';

const Stack = createStackNavigator();

export default class Wrapper extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="MessagesHooks" component={MessagesHooks} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="HomeHooks" component={HomeHooks} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
