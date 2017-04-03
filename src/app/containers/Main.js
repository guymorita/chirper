
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

// import { fetchTokenIfNeeded } from '../actions/auth'
// import { fetchReviewsIfNeeded } from '../actions/reviews'

class Main extends Component {
  render() {
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


export default connect()(Main)
