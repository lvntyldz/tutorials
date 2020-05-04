import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppButton} from 'appComponent/Button';
import {Routes} from 'appEnum';

export const ProductPriceValueHooks = props => {
  const [state, setState] = useState({
    title: 'iPhone 11',
    itemCount: 2,
    price: 1500,
  });

  const handlePriceChange = () => {
    setState(prevState => {
      console.warn('prevState : ', prevState);
      return {...prevState, price: prevState.price + 100};
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph1}>state : {JSON.stringify(state)}</Text>
      <AppButton
        style={{marginTop: 10}}
        title="increase item count"
        onBtnPress={() => handlePriceChange()}
      />

      <AppButton
        style={{marginTop: 10}}
        title="Go To ProductPriceValue"
        onBtnPress={() => props.navigation.navigate(Routes.ProductPriceValue)}
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
