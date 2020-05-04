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
import RangeCounter from 'appScreen/RangeCounter/Class';
import {RangeCounterHooks} from 'appScreen/RangeCounter/Hooks';
import ProductItemCount from 'appScreen/ProductItemCount/Class';
import {ProductItemCountHooks} from 'appScreen/ProductItemCount/Hooks';
import ProductPriceValue from 'appScreen/ProductPriceValue/Class';
import {ProductPriceValueHooks} from 'appScreen/ProductPriceValue/Hooks';
import ProductTitleValue from 'appScreen/ProductTitleValue/Class';
import {ProductTitleValueHooks} from 'appScreen/ProductTitleValue/Hooks';
import ShipmentDescValue from 'appScreen/ShipmentDescValue/Class';
import {ShipmentDescValueHooks} from 'appScreen/ShipmentDescValue/Hooks';

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
          <Stack.Screen name={Routes.RangeCounter} component={RangeCounter} />
          <Stack.Screen
            name={Routes.RangeCounterHooks}
            component={RangeCounterHooks}
          />
          <Stack.Screen
            name={Routes.ProductItemCount}
            component={ProductItemCount}
          />
          <Stack.Screen
            name={Routes.ProductItemCountHooks}
            component={ProductItemCountHooks}
          />
          <Stack.Screen
            name={Routes.ProductPriceValue}
            component={ProductPriceValue}
          />
          <Stack.Screen
            name={Routes.ProductPriceValueHooks}
            component={ProductPriceValueHooks}
          />
          <Stack.Screen
            name={Routes.ProductTitleValue}
            component={ProductTitleValue}
          />
          <Stack.Screen
            name={Routes.ProductTitleValueHooks}
            component={ProductTitleValueHooks}
          />
          <Stack.Screen
            name={Routes.ShipmentDescValue}
            component={ShipmentDescValue}
          />
          <Stack.Screen
            name={Routes.ShipmentDescValueHooks}
            component={ShipmentDescValueHooks}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
