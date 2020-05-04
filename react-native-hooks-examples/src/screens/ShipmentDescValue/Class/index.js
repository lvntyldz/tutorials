import React, {Component} from 'react';
import {Routes} from 'appEnum';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {AppButton} from 'appComponent/Button';

export default class ShipmentDescValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'iPhone 11',
      itemCount: 2,
      price: 1500,
      shipmentDesc: '',
    };
  }

  componentDidMount() {
    console.warn('Did mount!');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.itemCount !== this.state.itemCount) {
      console.warn('Product Item Count Update: ', this.state.itemCount);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph2}>
          state : {JSON.stringify(this.state)}
        </Text>
        <TextInput
          onChangeText={val => this.setState({shipmentDesc: val})}
          style={styles.input}
        />
        <AppButton
          style={{marginTop: 10}}
          title="update count"
          onBtnPress={() =>
            this.setState({itemCount: this.state.itemCount + 1})
          }
        />

        <AppButton
          style={{marginTop: 10}}
          title="Go To ShipmentDescValueHooks"
          onBtnPress={() =>
            this.props.navigation.navigate(Routes.ShipmentDescValueHooks)
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
    color: 'blue',
  },
  paragraph2: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
