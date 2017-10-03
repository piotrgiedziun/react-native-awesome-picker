import {Modal, Picker, View, StyleSheet, Button, Text, TouchableOpacity} from 'react-native'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AwesomePickerItem from './AwesomePickerItem'

export default class AwesomePicker extends Component {
  static Item = AwesomePickerItem

  state = {
    isPickerOpened: false,
    selectedValue: undefined,
    itemIndex: undefined
  }


  closePicker = () => {
    this.setState({isPickerOpened: false})
  }

  openPicker = () => {
    this.setState({isPickerOpened: true})
  }

  initWithProps(props) {
    const reducedOptions = props.children.reduce(function (map, obj) {
      map[obj.props.value] = obj.props.label
      return map
    }, {})
    this.setState({reducedOptions})
  }

  componentWillMount() {
    this.initWithProps(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.initWithProps(nextProps)
  }

  confirm = () => {
    const {selectedValue, itemIndex} = this.state
    if (this.props.onValueChange)
      this.props.onValueChange(selectedValue, itemIndex)
    this.closePicker()
  }

  renderButtons() {
    const defaultValue = this.props.selectedValue
    const {selectedValue} = this.state
    const allowConfirm = defaultValue === selectedValue || selectedValue === undefined
    return (
      <View style={styles.buttonsContainer}>
        <Button onPress={this.closePicker} title="Cancel"/>
        <Button disabled={allowConfirm} onPress={this.confirm} title="Confirm"/>
      </View>)
  }

  renderInput() {
    const defaultValue = this.props.selectedValue
    const {reducedOptions} = this.state
    let label = null
    if (defaultValue) {
      label = reducedOptions[defaultValue]
    }
    if (this.props.renderInput) {
      return this.props.renderInput(label)
    }
    return (
      <TouchableOpacity style={styles.textInputContainer} onPress={this.openPicker}>
        <Text style={styles.textInput}>
          {label}
        </Text>
      </TouchableOpacity>
    )
  }

  renderPickerModal() {
    const defaultValue = this.props.selectedValue
    const {selectedValue} = this.state
    return (
      <Modal
        animationType={'slide'}
        transparent
        visible={this.state.isPickerOpened}
      >
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            {this.renderButtons()}
            <Picker {...this.props}
                    selectedValue={selectedValue === undefined ? defaultValue : selectedValue}
                    onValueChange={(selectedValue, itemIndex) => this.setState({selectedValue, itemIndex})}>
              {this.props.children}
            </Picker>
          </View>
        </View>
      </Modal>
    )
  }


  render() {
    return (
      <View style={styles.container}>
        {this.renderInput()}
        {this.renderPickerModal()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  pickerContainer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 20,
  },
  textInputContainer: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
    minHeight: 40,
    justifyContent: 'center'
  }
})


AwesomePicker.propTypes = {
  children: PropTypes.array,
  selectedValue: PropTypes.any,
  onValueChange: PropTypes.func,
  renderInput: PropTypes.func
}
