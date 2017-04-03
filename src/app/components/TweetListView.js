
import React, { Component } from 'react'
import {
  ListView,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import TweetListViewCell from './TweetListViewCell'

class TweetListView extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      ds
    };
  }

  componentWillReceiveProps(nextProps) {
    const { tweets } = nextProps
    console.log('tweets', tweets)
    this.setState({
      dataSource: this.state.ds.cloneWithRows(tweets)
    })
  }

  render() {
    const { tweets } = this.props
    return (
      <ListView
        dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={(rowData) => <TweetListViewCell rowData={rowData} />}
      />
    );
  }
}

const mapStateToProps = function(state) {
  const { tweets } = state
  return { tweets }
}

export default connect(mapStateToProps)(TweetListView)