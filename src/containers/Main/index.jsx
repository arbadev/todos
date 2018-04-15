import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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
import { addTodo } from '../../actions/todo'


const propTypes = {
  todos: PropTypes.array,
  addTodo: PropTypes.func,
}


class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
  }

  // toggleModal() {
  //   this.setState((prevState, props) => {
  //     return { openModal: !prevState.openModal }
  //   })
  // }

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

  renderTodos(todos) {
    if (todos.length > 0) {
      return todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            todo={todo}
            // proceedCheckout={this.handleCheckout}
          />
        )
      })
    }
    return <Statistic label="No Todos yet..." className={styles.heading} />
  }

  render() {
    const { openModal, todo } = this.state
    const { todos } = this.props
    console.log('todo', todo)
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
            <Button positive size="huge" icon="checkmark" labelPosition="right" content="Add" onClick={this.handleClose} />
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
  }, dispatch)
}

Main.propTypes = propTypes

export default connect(mapStateToProps, matchDispatchToProps)(Main)
