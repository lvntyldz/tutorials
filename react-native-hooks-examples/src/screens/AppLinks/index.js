import * as React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Routes} from 'appEnum';
import {LinkItem} from 'appComponent/LinkItem';

export const AppLinks = props => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinkItem
        title="Go To Home >"
        description="Home Component created ClassComponent"
        goTo={Routes.Home}
        navigation={props.navigation}
      />
      <LinkItem
        title="Go To HomeHooks >"
        description="HomeHooks Component created Hooks"
        goTo={Routes.HomeHooks}
        navigation={props.navigation}
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
