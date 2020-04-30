import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const MessagesHooks = props => {
  const [message, setMessage] = useState(
    'Hello from MessagesHooks - This is state message',
  );

  return (
    <View>
      <Text style={styles.paragraph}>{message}</Text>
      <Button
        onPress={() => props.navigation.navigate('Messages')}
        title="GoToMessages"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
});
