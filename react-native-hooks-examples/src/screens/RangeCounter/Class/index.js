import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import {AppButton} from 'appComponent/Button';
import {Routes} from 'appEnum';

export class RangeCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
    };
  }

  handleStartOnPress = () => {
    const startValue = (this.state.start += 1);
    this.setState({start: startValue});
  };

  handleEndOnPress = () => {
    const endValue = (this.state.end += 1);
    this.setState({end: endValue});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.groupping}>
          <Text style={styles.paragraph1}>
            start value : {this.state.start}
          </Text>
          <Text style={styles.paragraph2}>end value : {this.state.end}</Text>
        </View>
        <View style={styles.groupping}>
          <AppButton
            style={{marginTop: 10}}
            title="increase start count"
            onBtnPress={() => this.handleStartOnPress()}
          />

          <AppButton
            style={{marginTop: 10}}
            title="increase end count"
            onBtnPress={() => this.handleEndOnPress()}
          />
        </View>

        <AppButton
          style={{marginTop: 10}}
          title="Go To RangeCounterHooks"
          onBtnPress={() =>
            this.props.navigation.navigate(Routes.RangeCounterHooks)
          }
        />
      </View>
    );
  }
}

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
    color: 'red',
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
