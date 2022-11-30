import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

export const Confirm = () => {
  let params = useRoute().params || {};
  const {confirmEmail} = params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Confirmation screen</Text>
      {confirmEmail && <Text>{confirmEmail} is confirmed</Text>}
      <Pressable
        onPress={() => navigation.navigate('Login')}
        style={styles.loginBtn}>
        <Text>Go to LOGIN</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={styles.loginBtn}>
        <Text>Go to Home</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#beb3b5',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#14a5ff',
  },
});
