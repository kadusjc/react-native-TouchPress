import React, { Component } from 'react'
import {bindAll, get} from 'lodash'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native'

export default class Main extends Component<{}> {
  constructor(props) {
    super(props)
    bindAll(this, '_onPressIn', '_onPressOut')
    this.state = {pressing: false}
  }

  _onPressIn(event) {
    this.setState({pressing: true})
  }

  _onPressOut(event) {
    this.setState({pressing: false})
  }

  render() {
    return  (
      <View style={styles.container}>
        <TouchableHighlight
          onPressIn={this._onPressIn}
          onPressOut={this._onPressOut}
          style={styles.touchable}>
          <View style={styles.button}>
            <Text style={styles.welcome}>
              {this.state.pressing  ? 'EEK!'  : 'PUSH ME'}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles  = StyleSheet.create({
  container:  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:  '#F5FCFF',
  },
  welcome:  {
    fontSize: 20,
    textAlign:  'center',
    margin: 10,
    color:  '#FFFFFF'
  },
  touchable:  {
    borderRadius: 100
  },
  button: {
    backgroundColor:  '#FF0000',
    borderRadius: 100,
    height: 200,
    width:  200,
    justifyContent: 'center'
  }
})