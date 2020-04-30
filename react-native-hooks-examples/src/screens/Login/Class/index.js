import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import {AppButton} from 'appComponent/Button';
import {Routes} from 'appEnum';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{this.state.username}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({username: text})}
        />

        <AppButton
          style={{marginTop: 10}}
          title="Go To LoginHooks"
          onBtnPress={() => this.props.navigation.navigate(Routes.LoginHooks)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  input: {height: 40, borderWidth: 1, marginBottom: 10},
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
});
