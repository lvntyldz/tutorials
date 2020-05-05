import React, {useRef, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {AppButton} from 'appComponent/Button';
import {CustomToastMessage} from 'appComponent/CustomToastMessage';

export const ToastMessageHooks = props => {
  const [desc, setDesc] = useState();

  const toastRef = useRef(null);

  const showToastMessage = d => {
    toastRef.current.show(d);
  };

  const hideToastMessage = () => {
    toastRef.current.hide();
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={d => setDesc(d)} />
      <AppButton
        style={{marginTop: 10}}
        title="Show toast message"
        onBtnPress={() => showToastMessage(`Message is ${desc}`)}
      />
      <AppButton
        style={{marginTop: 10}}
        title="Hide toast message"
        onBtnPress={() => hideToastMessage()}
      />
      <CustomToastMessage ref={toastRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
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
