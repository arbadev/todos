import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UUID from 'uuid-js'
import { Grid } from 'react-flexbox-grid'
import { Card, Button, Modal, Statistic, Form } from 'semantic-ui-react'

/*
* Styles
*/

import styles from './main.css'


/*
* Containers
*/


/*
 * Components
*/
import Todo from '../../components/Todo'

/*
 * Actions
*/
import { addTodo, removeTodo, toggleTodo } from '../../actions/todo'


const propTypes = {
  todos: PropTypes.array,
  addTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
}


class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: this.props.todos,
      openModal: false,
      todo: {
        title: '',
        task: '',
      },
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.renderTodos = this.renderTodos.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { todos } = nextProps
    this.setState({ todos })
  }

  handleOpen() {
    return this.setState({ openModal: true })
  }
  handleClose() {
    return this.setState({ openModal: false })
  }

  handleChange(e) {
    const { id, value } = e.target
    const { todo } = this.state
    if (id === 'title') {
      todo.title = value
    } else if (id === 'task') {
      todo.task = value
    }
    return this.setState({ todo })
  }

  handleAdd() {
    const { todo } = this.state
    const id = UUID.create()
    todo.id = id.toString()
    todo.done = false
    this.setState({
      openModal: false,
      todo: {
        title: '',
        task: '',
      },
    })
    return this.props.addTodo(todo)
  }

  handleDelete(todo) {
    return this.props.removeTodo(todo)
  }

  handleToggle(todo) {
    return this.props.toggleTodo(todo)
  }

  renderTodos(todos) {
    if (todos.length > 0) {
      return todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={this.handleDelete}
            onToggle={this.handleToggle}
          />
        )
      })
    }
    return <Statistic label="No Todos yet..." className={styles.heading} />
  }

  render() {
    const { openModal, todo } = this.state
    const { todos } = this.state
    return (
      <Grid
        className={styles.grid}
      >
        <Button
          icon="add"
          circular
          floated="right"
          size="massive"
          onClick={this.handleOpen}
        />
        <Card.Group>
          {this.renderTodos(todos)}
        </Card.Group>

        <Modal
          dimmer="blurring"
          open={openModal}
          onClose={this.handleClose}
          className={styles.modal}
        >
          <Modal.Header className={styles.modal__header}>Todo</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Form className={styles.modal__form}>
                <Form.Field>
                  <Form.Input
                    fluid
                    label="Title"
                    id="title"
                    placeholder="Todo Title"
                    value={todo.title}
                    onChange={e => this.handleChange(e)}
                  />
                </Form.Field>
                <Form.Field>
                  <Form.TextArea
                    label="Task"
                    id="task"
                    placeholder="Describe the todo here..."
                    value={todo.task}
                    onChange={e => this.handleChange(e)}
                  />
                </Form.Field>
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" size="huge" onClick={this.handleClose}>
              Discard
            </Button>
            <Button
              positive
              size="huge"
              icon="checkmark"
              labelPosition="right"
              content="OK"
              onClick={this.handleAdd}
              disabled={!todo.title.length > 0 || !todo.task.length > 0}
            />
          </Modal.Actions>
        </Modal>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTodo,
    removeTodo,
    toggleTodo,
  }, dispatch)
}

Main.propTypes = propTypes

export default connect(mapStateToProps, matchDispatchToProps)(Main)
