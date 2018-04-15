import update from 'immutability-helper'
// import { REHYDRATE } from 'redux-persist/constants'

import { ADD_TODO, REMOVE_TODO } from '../actions/todo'

const initialState = {
  todos: [
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { todo } = action
      return update(state, {
        todos: { $push: [todo] },
      })
    }
    case REMOVE_TODO: {
      const { todo } = action
      const { todos } = state
      const index = todos.findIndex(t => t.id === todo.id)
      return update(state, {
        todos: { $splice: [[index, 1]] },
      })
    }
    default:
      return state
  }
}
