

import React, { Component } from 'react'
import {
  Image,
  Text,
  StyleSheet,
  View
} from 'react-native'

export default class TweetListViewCell extends Component {
  constructor() {
    super()
  }

  render() {
    const { rowData } = this.props
    const { user } = rowData

    return (
      <View style={styles.container}>
        <View style={styles.leftCol}>
          <Image
            style={styles.profileImage}
            source={{uri: user.profile_image_url_https}}
          />
        </View>
        <View style={styles.rightCol}>
          <View style={styles.names}>
            <Text style={styles.name}>
              {user.name}
            </Text>
            <Text style={styles.screenName}>
              @{user.screen_name}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>
              {rowData.text}
            </Text>
          </View>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  leftCol: {
    flex: 0.2,
    padding: 10
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 8
  },
  rightCol: {
    flex: 0.8,
    padding: 10
  },
  names: {
    flexDirection: 'row'
  },
  name: {
    fontWeight: 'bold',
    marginRight: 10
  },
  screenName: {
    color: '#666'
  }
})
