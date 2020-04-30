import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {AppButton} from 'appComponent/Button';
import {Routes} from 'appEnum';

export const LoginHooks = props => {
  const [username, setUsername] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{username}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUsername(text)}
      />

      <AppButton
        style={{marginTop: 10}}
        title="Go To Login"
        onBtnPress={() => props.navigation.navigate(Routes.Login)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {height: 40, borderWidth: 1, marginBottom: 10},
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
});
