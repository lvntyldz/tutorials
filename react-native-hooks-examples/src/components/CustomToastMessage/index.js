import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const CustomToastMessage = forwardRef((props, ref) => {
  const [message, setMessage] = useState();
  const [isVisible, setIsVisible] = useState();

  const showToast = msg => {
    setIsVisible(true);
    setMessage(msg);
  };

  const hideToast = () => {
    setIsVisible(false);
    setMessage(null);
  };

  useImperativeHandle(ref, () => {
    return {
      show: showToast,
      hide: hideToast,
    };
  });

  if (!isVisible) {
    return null;
  }
  return (
    <View style={styles.toast}>
      <Text>{message}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    zIndex: 11,
    height: 60,
  },
});
