import React, {useEffect, useState} from 'react';
import {Routes} from 'appEnum';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {AppButton} from 'appComponent/Button';

export const ShipmentDescValueHooks = props => {
  const [shipmentDesc, setShipmentDesc] = useState('');
  const [state, setState] = useState({
    title: 'iPhone 11',
    itemCount: 2,
    price: 1500,
  });

  useEffect(() => {
    console.warn('Use Effect!');
  }, [state]);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph1}>state : {JSON.stringify(state)}</Text>
      <Text style={styles.paragraph1}>
        desc : {JSON.stringify(shipmentDesc)}
      </Text>
      <TextInput
        onChangeText={val => setShipmentDesc(val)}
        style={styles.input}
      />
      <AppButton
        style={{marginTop: 10}}
        title="update count"
        onBtnPress={() => setState({...state, itemCount: state.itemCount + 1})}
      />

      <AppButton
        style={{marginTop: 10}}
        title="Go To ShipmentDescValue"
        onBtnPress={() => props.navigation.navigate(Routes.ShipmentDescValue)}
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
