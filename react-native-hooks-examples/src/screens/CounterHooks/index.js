import React, {Component, useState, useMemo} from 'react';

import {View, StyleSheet, Text} from 'react-native';
import {AppButton} from 'appComponent/Button';

export const CounterHooks = () => {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(1000);

  const delay = millisecond => {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= millisecond) {
      console.warn('sleeping...');
    }
  };

  const calculateColor = () => {
    delay(1500);
    return count % 2 === 0;
  };

  const isBlue = useMemo(calculateColor, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {isBlue ? 'blue' : 'yellow'} color selected
      </Text>
      <AppButton
        style={[styles.btn, {backgroundColor: isBlue ? 'blue' : 'yellow'}]}
        title={`increment Count - (${count})`}
        onBtnPress={() => setCount(c => c + 1)}
      />

      <AppButton
        style={styles.btn}
        title={`increment Price - (${price})`}
        onBtnPress={() => setPrice(c => c + 5)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    top: 50,
  },
  btn: {margin: 10, backgroundColor: 'skyblue'},
  paragraph: {
    fontSize: 14,
    maxHeight: 60,
    margin: 10,
    padding: 0,
  },
});
