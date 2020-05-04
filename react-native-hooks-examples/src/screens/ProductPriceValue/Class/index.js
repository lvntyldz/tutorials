import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppButton} from 'appComponent/Button';
import {Routes} from 'appEnum';

export default class ProductPriceValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'iPhone 11',
      itemCount: 2,
      price: 1500,
    };
  }

  handlePriceChange = () => {
    this.setState((prevState, props) => {
      console.warn('prevState : ', prevState);
      return {
        price: prevState.price + 101,
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph2}>
          state : {JSON.stringify(this.state)}
        </Text>
        <AppButton
          style={{marginTop: 10}}
          title="increase item count"
          onBtnPress={() => this.handlePriceChange()}
        />

        <AppButton
          style={{marginTop: 10}}
          title="Go To ProductPriceValueHooks"
          onBtnPress={() =>
            this.props.navigation.navigate(Routes.ProductPriceValueHooks)
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
});
