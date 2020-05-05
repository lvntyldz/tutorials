import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppButton} from 'appComponent/Button';
import YearMonthViewer from 'appComponent/YearMonthViewer';
import {random} from 'appUtil';

export const DateRangeHooks = props => {
  const [startYear, setStartYear] = useState(2020);
  const [endYear, setEndYear] = useState(2050);
  const [startMonth, setStartMonth] = useState(1);
  const [endMonth, setEndMonth] = useState(5);

  return (
    <View style={styles.container}>
      <View style={styles.grouping}>
        <YearMonthViewer title="Start Year" year={startYear} />
        <YearMonthViewer title="End Year" year={endYear} />
      </View>

      <View style={styles.grouping}>
        <YearMonthViewer title="Start Month" year={startMonth} />
        <YearMonthViewer title="End Month" year={endMonth} />
      </View>

      <View style={styles.grouping}>
        <AppButton
          style={styles.startDateBtn}
          title="change start Year"
          onBtnPress={() => setStartYear(random(2000, 2020))}
        />

        <AppButton
          style={{marginTop: 5}}
          title="change end Year"
          onBtnPress={() => setEndYear(random(2020, 2050))}
        />
      </View>

      <View style={styles.grouping}>
        <AppButton
          style={styles.startDateBtn}
          title="change start month"
          onBtnPress={() => setStartMonth(random(1, 12))}
        />

        <AppButton
          style={{marginTop: 5}}
          title="change end month"
          onBtnPress={() => setEndMonth(random(1, 12))}
        />
      </View>
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
  grouping: {
    flex: 1,
    maxHeight: 100,
    flexDirection: 'row',
  },
  startDateBtn: {marginTop: 5, backgroundColor: 'skyblue'},
});
