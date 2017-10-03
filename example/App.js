/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import AwesomePicker from 'react-native-awesome-picker'


export default class App extends Component<{}> {
  state = {
    language: 'js'
  }

  render() {
    return (
      <View style={styles.container}>
        <AwesomePicker
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue, itemIndex})}>
          <AwesomePicker.Item label="Java" value="java"/>
          <AwesomePicker.Item label="JavaScript" value="js"/>
        </AwesomePicker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
