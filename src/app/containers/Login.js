
import React, { Component } from 'react'
import {
  Button,
  Linking,
  StyleSheet,
  Text,
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

  componentDidMount() {
    var url = Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('Initial url is: ' + url);
      }
    }).catch(err => console.error('An error occurred', err));
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Yalp
        </Text>
        <View>
          <Button
            onPress={this._onLoginPress}
            title="Login"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: 80,
    color: 'white'
  }
})

export default connect()(Login)