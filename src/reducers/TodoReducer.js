// import update from 'immutability-helper'
// import { REHYDRATE } from 'redux-persist/constants'

import { ADD_TODO, REMOVE_TODO } from '../actions/todo'

const initialState = {
  todos: [
    {
      title: 'Steve Sanders Steve Sanders Steve Sanders',
      task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra eget diam ut bibendum. Maecenas sed laoreet metus, a posuere.',
    },
    {
      title: 'Steve Sanders Steve Sanders Steve Sanders',
      task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra eget diam ut bibendum. Maecenas sed laoreet metus, a posuere.',
    },
    {
      title: 'Steve Sanders Steve Sanders Steve Sanders',
      task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra eget diam ut bibendum. Maecenas sed laoreet metus, a posuere.',
    },
    {
      title: 'Steve Sanders Steve Sanders Steve Sanders',
      task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra eget diam ut bibendum. Maecenas sed laoreet metus, a posuere.',
    },
    {
      title: 'Steve Sanders Steve Sanders Steve Sanders',
      task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra eget diam ut bibendum. Maecenas sed laoreet metus, a posuere.',
    },
    {
      title: 'Steve Sanders Steve Sanders Steve Sanders',
      task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra eget diam ut bibendum. Maecenas sed laoreet metus, a posuere.',
    },
    {
      title: 'Steve Sanders Steve Sanders Steve Sanders',
      task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra eget diam ut bibendum. Maecenas sed laoreet metus, a posuere.',
    },
    {
      title: 'Steve Sanders Steve Sanders Steve Sanders',
      task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra eget diam ut bibendum. Maecenas sed laoreet metus, a posuere.',
    },
    {
      title: 'Steve Sanders Steve Sanders Steve Sanders',
      task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra eget diam ut bibendum. Maecenas sed laoreet metus, a posuere.',
    },
    {
      title: 'Steve Sanders Steve Sanders Steve Sanders',
      task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra eget diam ut bibendum. Maecenas sed laoreet metus, a posuere.',
    },
    {
      title: 'Steve Sanders Steve Sanders Steve Sanders',
      task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra eget diam ut bibendum. Maecenas sed laoreet metus, a posuere.',
    },
    {
      title: 'Steve Sanders Steve Sanders Steve Sanders',
      task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra eget diam ut bibendum. Maecenas sed laoreet metus, a posuere.',
    },
  ],
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
