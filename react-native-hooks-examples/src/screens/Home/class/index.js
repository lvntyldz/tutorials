import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.paragraph}>Hello from Home</Text>
        <Button
          onPress={() => this.props.navigation.navigate('HomeHooks')}
          title="GoToHomeHooks"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
});
