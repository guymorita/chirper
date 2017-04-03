
import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import NavigationBar from 'react-native-navbar'
import Drawer from 'react-native-drawer'

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
    console.log('toggling')
    this._drawer._open ? this.closeDrawer() : this.openDrawer()
  }

  render() {
    const { auth } = this.props

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<Profile closeDrawer={this.closeDrawer}/>}
        openDrawerOffset={100}
        >
        <View style={styles.container}>
          <NavigationBar
            title={this.titleConfig}
            leftButton={this.leftButtonConfig}
          />
        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
})

class Profile extends Component {
  close = () => {
    this.props.closeDrawer()
  }
  render() {
    return (
      <View style={drawerStyles.container}>
        <View>
          <Button
            onPress={this.close.bind(this)}
            title={'Close'}
          />
          <Text>
            Profile
          </Text>
        </View>
      </View>

    );
  }
}

const drawerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#4E4E4E',
    flex: 1
  }
})


const mapStateToProps = function(state) {
  const { auth } = state
  return { auth }
}

export default connect(mapStateToProps)(Main)
