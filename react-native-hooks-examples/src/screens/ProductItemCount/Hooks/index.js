import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppButton} from 'appComponent/Button';
import {Routes} from 'appEnum';

export const ProductItemCountHooks = props => {
  const [state, setState] = useState({
    title: 'iPhone 11',
    itemCount: 2,
    price: 1500,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph1}>state : {JSON.stringify(state)}</Text>
      <AppButton
        style={{marginTop: 10}}
        title="increase item count"
        onBtnPress={() => setState({...state, itemCount: state.itemCount + 1})}
      />

      <AppButton
        style={{marginTop: 10}}
        title="Go To ProductItemCount"
        onBtnPress={() => props.navigation.navigate(Routes.ProductItemCount)}
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
