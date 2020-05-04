import React, {useEffect, useState} from 'react';
import {Routes} from 'appEnum';
import {StyleSheet, Text, View} from 'react-native';
import {AppButton} from 'appComponent/Button';

export const ProductTitleValueHooks = props => {
  const [state, setState] = useState({
    title: 'iPhone 11',
    itemCount: 2,
    price: 1500,
  });

  const handleTitleChange = () => {
    setState({...state, title: 'xiaomi mi 10 pro'});
  };

  useEffect(() => {
    console.warn('Use Effect!');
  });

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph1}>state : {JSON.stringify(state)}</Text>
      <AppButton
        style={{marginTop: 10}}
        title="update title"
        onBtnPress={() => handleTitleChange()}
      />

      <AppButton
        style={{marginTop: 10}}
        title="Go To ProductTitleValue"
        onBtnPress={() => props.navigation.navigate(Routes.ProductTitleValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  input: {height: 40, borderWidth: 1, marginBottom: 10},
  paragraph1: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
  paragraph2: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
