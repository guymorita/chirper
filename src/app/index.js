
import React, { Component } from 'react'
import {
  Navigator
} from 'react-native'

import Main from './containers/Main'
import Login from './containers/Login'

export default class App extends Component {
  render() {
    const routes = [
      {
        title: 'Main',
        index: 0,
      },
      {
        title: 'Details',
        index: 1,
      },
      {
        title: 'Filter',
        index: 2,
      },
      {
        title: 'Map',
        index: 3,
      },
      {
        title: 'Login',
        index: 4
      }
    ]

    return (
      <Navigator
        initialRoute={routes[4]}
        initialRouteStack={routes}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

  renderScene(route, navigator) {
    switch (route.title) {
      case 'Main':
        return (<Main navigator={navigator} />)
      case 'Login':
        return (<Login navigator={navigator} />)
    }
  }
}