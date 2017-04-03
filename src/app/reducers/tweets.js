
import { REQUEST_TWEETS, RECEIVE_TWEETS } from '../actions/tweets'

const initialState = []

export default function reviews(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_TWEETS:
      const tweets = action.json
      return Object.assign([], state, tweets)
    default:
      return state
  }
}
