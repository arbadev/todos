import React, { PureComponent, PropTypes } from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

import styles from './todo.css'

const propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
}

class Todo extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleDelete() {
    const { todo, onDelete } = this.props
    return onDelete(todo)
  }

  handleToggle() {
    const { todo, onToggle } = this.props
    return onToggle(todo)
  }

  render() {
    const { todo } = this.props
    return (
      <Card
        color={todo.done ? 'green' : 'red'}
        className={styles.todo}
      >

        <Card.Content>
          <Button
            icon
            floated="right"
            onClick={this.handleDelete}
          >
            <Icon name="remove" />
          </Button>
          <Button
            icon
            floated="right"
          >
            <Icon name="pencil" />
          </Button>
          <Card.Header>
            {todo.title}
          </Card.Header>
          <Card.Description>
            {todo.task}
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              basic
              color="black"
              onClick={this.handleToggle}
              className={styles.btn}
            >
              {todo.done ? 'Mark as undone' : 'Mark as done'}
            </Button>
          </div>
        </Card.Content>

      </Card>
    )
  }
}


Todo.propTypes = propTypes
export default Todo
