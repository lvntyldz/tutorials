import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {AppButton} from 'appComponent/Button';
import {Routes} from 'appEnum';

export const RangeCounterHooks = props => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.groupping}>
        <Text style={styles.paragraph1}>start value : {start}</Text>
        <Text style={styles.paragraph2}>end value : {end}</Text>
      </View>
      <View style={styles.groupping}>
        <AppButton
          style={{marginTop: 10}}
          title="increase start count"
          onBtnPress={() => setStart(start + 1)}
        />

        <AppButton
          style={{marginTop: 10}}
          title="increase end count"
          onBtnPress={() => setEnd(end + 1)}
        />
      </View>

      <AppButton
        style={{marginTop: 10}}
        title="Go To RangeCounter"
        onBtnPress={() => props.navigation.navigate(Routes.RangeCounter)}
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
  groupping: {
    flexDirection: 'row',
  },
});
