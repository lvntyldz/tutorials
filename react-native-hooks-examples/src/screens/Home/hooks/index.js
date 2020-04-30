import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const HomeHooks = props => {
  return (
    <View>
      <Text style={styles.paragraph}>Hello from HomeHooks</Text>
      <Button
        onPress={() => props.navigation.navigate('Home')}
        title="GoToHome"
      />
    </View>
  );
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
