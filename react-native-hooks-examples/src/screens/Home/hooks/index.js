import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const HomeHooks = () => {
  return <Text style={styles.paragraph}>Hello from HomeHooks</Text>;
};

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
});
