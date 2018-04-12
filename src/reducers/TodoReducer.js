// import update from 'immutability-helper'
// import { REHYDRATE } from 'redux-persist/constants'

import { ADD_TODO, REMOVE_TODO } from '../actions/todo'

const initialState = {
  items: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return 0
    }
    case REMOVE_TODO: {
      return 0
    }
    default:
      return state
  }
}
