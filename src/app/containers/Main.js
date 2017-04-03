
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'


class Main extends Component {
  render() {
    const { auth } = this.props
    console.log('auth', auth)
    // alert(auth && auth.credentials && auth.credentials.stringify())
    return (
      <View>
        <Text>
          Main
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
})

const mapStateToProps = function(state) {
  const { auth } = state
  return { auth }
}

export default connect(mapStateToProps)(Main)
