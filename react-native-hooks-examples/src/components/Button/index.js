import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const AppButton = props => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={() => props.onBtnPress()}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'column',
    maxHeight: 60,
    maxWidth: 120,
    margin: 0,
    padding: 0,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
});
