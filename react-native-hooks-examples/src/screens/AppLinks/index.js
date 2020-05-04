import * as React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Routes} from 'appEnum';
import {LinkItem} from 'appComponent/LinkItem';

export const AppLinks = props => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinkItem
        title="Home"
        description="Home Component created ClassComponent"
        goTo={Routes.Home}
        navigation={props.navigation}
        style={{backgroundColor: 'skyblue'}}
      />

      <LinkItem
        title="HomeHooks"
        description="HomeHooks Component created Hooks"
        goTo={Routes.HomeHooks}
        navigation={props.navigation}
        style={{backgroundColor: 'skyblue'}}
      />

      <LinkItem
        title="Messages"
        description="Read state example created ClassComponent"
        goTo={Routes.Messages}
        navigation={props.navigation}
        style={{backgroundColor: 'steelblue'}}
      />

      <LinkItem
        title="MessagesHooks"
        description="Read state example created Hooks"
        goTo={Routes.MessagesHooks}
        navigation={props.navigation}
        style={{backgroundColor: 'steelblue'}}
      />

      <LinkItem
        title="Login"
        description="Set state example created ClassComponent"
        goTo={Routes.Login}
        navigation={props.navigation}
        style={{backgroundColor: 'powderblue'}}
      />

      <LinkItem
        title="LoginHooks"
        description="Set state example created Hooks"
        goTo={Routes.LoginHooks}
        navigation={props.navigation}
        style={{backgroundColor: 'powderblue'}}
      />

      <LinkItem
        title="RangeCounter"
        description="RangeCounter Component created ClassComponent"
        goTo={Routes.RangeCounter}
        navigation={props.navigation}
        style={{backgroundColor: 'skyblue'}}
      />

      <LinkItem
        title="RangeCounterHooks"
        description="RangeCounterHooks Component created Hooks"
        goTo={Routes.RangeCounterHooks}
        navigation={props.navigation}
        style={{backgroundColor: 'skyblue'}}
      />

      <LinkItem
        title="ProductItemCount"
        description="Update multi state object example created ClassComponent"
        goTo={Routes.ProductItemCount}
        navigation={props.navigation}
        style={{backgroundColor: 'steelblue'}}
      />

      <LinkItem
        title="ProductItemCountHooks"
        description="Update multi state object example created Hooks"
        goTo={Routes.ProductItemCountHooks}
        navigation={props.navigation}
        style={{backgroundColor: 'steelblue'}}
      />

      <LinkItem
        title="ProductPriceValue"
        description="Use prev state example created ClassComponent"
        goTo={Routes.ProductPriceValue}
        navigation={props.navigation}
        style={{backgroundColor: 'powderblue'}}
      />

      <LinkItem
        title="ProductPriceValueHooks"
        description="SUse prev state example created Hooks"
        goTo={Routes.ProductPriceValueHooks}
        navigation={props.navigation}
        style={{backgroundColor: 'powderblue'}}
      />

      <LinkItem
        title="ProductTitleValue"
        description="ProductTitleValue Component created ClassComponent"
        goTo={Routes.ProductTitleValue}
        navigation={props.navigation}
        style={{backgroundColor: 'skyblue'}}
      />

      <LinkItem
        title="ProductTitleValueHooks"
        description="ProductTitleValueHooks Component created Hooks"
        goTo={Routes.ProductTitleValueHooks}
        navigation={props.navigation}
        style={{backgroundColor: 'skyblue'}}
      />

      <LinkItem
        title="ShipmentDescValue"
        description="Read state example created ClassComponent"
        goTo={Routes.ShipmentDescValue}
        navigation={props.navigation}
        style={{backgroundColor: 'steelblue'}}
      />

      <LinkItem
        title="ShipmentDescValueHooks"
        description="Read state example created Hooks"
        goTo={Routes.ShipmentDescValueHooks}
        navigation={props.navigation}
        style={{backgroundColor: 'steelblue'}}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 300,
  },
  button: {
    flex: 1,
    flexDirection: 'column',
  },
});
