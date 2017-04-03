
import _ from 'lodash'
import qs from 'qs'

export const REQUEST_TWEETS = 'REQUEST_TWEETS'
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

function requestTweets() {
  return {
    type: REQUEST_TWEETS
  }
}

function receiveTweets(json) {
  return {
    type: RECEIVE_TWEETS,
    json
  }
}

export function fetchTweets() {
  return (dispatch, getState) => {
    const state = getState()
    if (_.isEmpty(state.auth)) {
      return
    }
    dispatch(requestTweets())

    const statusUrl = 'https://api.twitter.com/1.1/statuses/home_timeline.json'
    const oauthString = `OAuth oauth_consumer_key="wVOkRfWovAz16p6zxn2vW7LlP",oauth_token="7321352-uPaWJkaUkUWI6ZTF3AR5AQphWtBHdgWw1JdhIro310",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1491216472",oauth_nonce="dk7QtP9CymE",oauth_version="1.0",oauth_signature="Pt%2BmmGoz%2FK6wIWV%2BE7sYWy8tUws%3D"`

    const request = new Request(statusUrl, {
      method: 'GET',
      headers: new Headers({
        Authorization: oauthString
      }),
    });

    return fetch(request)
      .then(response => {
        console.log('response', response)
        return response.json()
      })
      .then(json => {
        return dispatch(receiveTweets(json))
      })
  }
}
