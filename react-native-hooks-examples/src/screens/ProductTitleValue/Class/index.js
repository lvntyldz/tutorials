import React, {Component} from 'react';
import {Routes} from 'appEnum';
import {StyleSheet, Text, View} from 'react-native';
import {AppButton} from 'appComponent/Button';

export default class ProductTitleValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'iPhone 11',
      itemCount: 2,
      price: 1500,
    };
  }

  componentDidMount() {
    console.warn('Did mount!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.warn('Did Update prevProps: ', prevProps);
    console.warn('Did Update prevState: ', prevState);
  }

  handleTitleChange = () => {
    this.setState({title: 'xiaomi mi 10 pro'});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph2}>
          state : {JSON.stringify(this.state)}
        </Text>
        <AppButton
          style={{marginTop: 10}}
          title="update title"
          onBtnPress={() => this.handleTitleChange()}
        />

        <AppButton
          style={{marginTop: 10}}
          title="Go To ProductTitleValueHooks"
          onBtnPress={() =>
            this.props.navigation.navigate(Routes.ProductTitleValueHooks)
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
