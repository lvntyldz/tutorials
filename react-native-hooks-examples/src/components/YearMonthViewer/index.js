import React from 'react';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  paragraph2: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
});

function YearMonthViewer({title, year}) {
  console.warn(`YearMonthViewer - title : ${title} - year : ${year}`);
  return (
    <Text style={styles.paragraph2}>
      {title} : {year}
    </Text>
  );
}

export default React.memo(YearMonthViewer);
