import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from 'appScreen/Home/Class';
import {HomeHooks} from 'appScreen/Home/Hooks';

export default class Wrapper extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Home />
        <HomeHooks />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
