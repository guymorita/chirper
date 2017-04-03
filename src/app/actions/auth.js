
export const RECEIVE_CREDENTIALS = 'RECEIVE_CREDENTIALS'

export function receiveCredentials(json) {
  return {
    type: RECEIVE_CREDENTIALS,
    credentials: json
  }
}
