# React Native Awesome Picker
[![NPM Version](https://img.shields.io/npm/v/react-native-awesome-picker.svg?style=flat)](https://www.npmjs.com/package/react-native-awesome-picker)

The package is both **Android** and **iOS** compatible.

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

## Screenshots

[<img src="https://github.com/johniak/react-native-awesome-picker/raw/master/screenshoots/ios.gif" width="350">](https://github.com/johniak/react-native-awesome-picker/raw/master/screenshoots/ios.gif)
[<img src="https://github.com/johniak/react-native-awesome-picker/raw/master/screenshoots/android.gif" width="350">](https://github.com/johniak/react-native-awesome-picker/raw/master/screenshoots/android.gif)
