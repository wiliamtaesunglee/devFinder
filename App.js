import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { authorize } from 'react-native-app-auth'

import config from './config';

// Log in to get an authentication token
export default class App extends Component {
  async _authorize () {
    try {
      // Make request to Github to get token
      const authState = await authorize(config)

      console.log({ authState })
    } catch (error) {
      console.log('error', error)
    }
  }

  render () {
    return (
        <View>
          <Text>DevFinder</Text>
          <Button onPress={this._authorize} title='Login' />
        </View>
    )
  }
}

const styles = StyleSheet.create({})
