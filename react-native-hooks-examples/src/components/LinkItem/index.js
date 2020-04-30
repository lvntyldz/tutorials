import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppButton} from 'appComponent/Button';

export const LinkItem = props => {
  return (
    <View style={styles.listItem}>
      <AppButton
        title={props.title}
        onBtnPress={() => props.navigation.navigate(props.goTo)}
      />
      <View style={styles.paragraphWrapper}>
        <Text style={styles.paragraph}>{props.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    maxHeight: 60,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#c4c4c4',
    margin: 5,
  },
  paragraphWrapper: {
    flex: 1,
    maxHeight: 60,
    margin: 0,
    padding: 0,
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 14,
    maxHeight: 60,
    margin: 0,
    padding: 0,
  },
});
