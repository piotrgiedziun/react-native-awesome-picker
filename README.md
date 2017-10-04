# React Native Awesome Picker
[![NPM Version](https://img.shields.io/npm/v/react-native-awesome-picker.svg?style=flat)](https://www.npmjs.com/package/react-native-awesome-picker) ![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-green.svg)

iOS | Android
------- | ----
<img src="https://github.com/johniak/react-native-awesome-picker/raw/master/screenshoots/ios.gif" width="350"> | <img src="https://github.com/johniak/react-native-awesome-picker/raw/master/screenshoots/android.gif" width="350">


## How to use?

Install library

```
$ npm i -s react-native-awesome-picker
```

Import required dependencies.

```
import AwesomePicker from 'react-native-awesome-picker'
```

and then in body of your component
```
state = {language: 'js'}

renderPicker() {
  return (
    <AwesomePicker
      selectedValue={this.state.language}
      onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
      <AwesomePicker.Item label="Java" value="java"/>
      <AwesomePicker.Item label="JavaScript" value="js"/>
    </AwesomePicker>
  )
}
```
