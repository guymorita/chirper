
import { RECEIVE_CREDENTIALS } from '../actions/auth'

const initialState = {
}

export default function reviews(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_CREDENTIALS:
      const credentials = action.credentials
      return Object.assign({}, state, credentials)
    default:
      return state
  }
}
