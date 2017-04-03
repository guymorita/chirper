
import React, { Component } from 'react'
import {
  Button,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { connect } from 'react-redux'
import { twitter } from 'react-native-simple-auth';
import config from '../../config'
import { receiveCredentials } from '../actions/auth'

class Login extends Component {
  _onLoginPress = () => {
    const _this = this;
    const { dispatch } = this.props
    const twitterConfig = {
      appId: config.TWITTER_CONSUMER_KEY,
      appSecret: config.TWITTER_CONSUMER_SECRET,
      callback: config.TWITTER_CALLBACK_URL
    }
    twitter(twitterConfig)
      .then((info) => {
        dispatch(receiveCredentials(info))
        _this.props.navigator.push({
          title: 'Main',
          info,
          index: 0
        });
      })
      .catch((error) => {
        console.log('error', error)
      });

  }

  render() {
    const image = require('./b.png')
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={this._onLoginPress}>
            <Image
              style={styles.bird}
              source={image}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    fontSize: 80,
    color: 'white'
  },
  bird: {
    marginTop: 200,
    height: 200,
    width: 200
  }
})

export default connect()(Login)