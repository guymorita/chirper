
import React, { Component } from 'react'
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import NavigationBar from 'react-native-navbar'
import Drawer from 'react-native-drawer'

import TweetListView from '../components/TweetListView'

import { fetchTweets } from '../actions/tweets'

class Main extends Component {
  leftButtonConfig = {
    title: 'Profile',
    handler: () => this.toggleHamburger(),
  };

  titleConfig = {
    title: 'Chirper',
  };

  closeDrawer = () => {
    this._drawer.close()
  }

  openDrawer = () => {
    this._drawer.open()
  }

  toggleHamburger() {
    this._drawer._open ? this.closeDrawer() : this.openDrawer()
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = nextProps
    dispatch(fetchTweets())
  }

  render() {
    const { auth } = this.props

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<Profile closeDrawer={this.closeDrawer} auth={auth}/>}
        openDrawerOffset={100}
        >
        <View style={styles.container}>
          <NavigationBar
            title={this.titleConfig}
            containerStyle={styles.navbar}
            leftButton={this.leftButtonConfig}
          />
          <TweetListView />
        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#68A8E8',
  },
})

class Profile extends Component {
  close = () => {
    this.props.closeDrawer()
  }
  render() {
    const { auth } = this.props
    const { user } = auth

    return (
      <View style={drawerStyles.container}>
        <NavigationBar
          title={this.titleConfig}
          containerStyle={styles.navbar}
        />
        <View>
          <Button
            onPress={this.close.bind(this)}
            title={'Close'}
            color={'#555'}
          />
          {user &&
            <View style={drawerStyles.profile}>
              <View style={drawerStyles.left}>
                <Image
                  style={drawerStyles.image}
                  source={{uri: user.profile_image_url_https}}
                />
              </View>
              <View style={drawerStyles.right}>
                <Text style={drawerStyles.name}>
                  {user.name}
                </Text>
                <Text style={drawerStyles.handle}>
                  @{user.screen_name}
                </Text>
                <Text style={drawerStyles.location}>
                  {user.location}
                </Text>
              </View>
            </View>
          }
        </View>
      </View>

    );
  }
}

const drawerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF3F6',
    flex: 1
  },
  closeButton: {
    color: 'blue'
  },
  profile: {
    flexDirection: 'row'
  },
  left: {
    flex: 0.3,
    padding: 10
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 5
  },
  right: {
    flex: 0.7,
    padding: 10
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10
  },
  handle: {
    color: '#444'
  },
  location: {

  }
})

const mapStateToProps = function(state) {
  const { auth } = state
  return { auth }
}

export default connect(mapStateToProps)(Main)
