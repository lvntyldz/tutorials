import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello from Messages - This is state message',
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.paragraph}>{this.state.message}</Text>
        <Button
          onPress={() => this.props.navigation.navigate('MessagesHooks')}
          title="GoToMessagesHooks"
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
    color: 'blue',
  },
});
