/*
 * CONSTANTS
*/

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

/*
 * ACTIONS CREATORS
*/

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  }
}

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo,
  }
}


export const toggleTodo = (todo) => {
  return {
    type: TOGGLE_TODO,
    todo,
  }
}
