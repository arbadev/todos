import React, { PureComponent, PropTypes } from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'

import styles from './todo.css'

const propTypes = {
  todo: PropTypes.object,
}

class Todo extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { todo } = this.props
    return (
      <Card>

        <Card.Content>
          <Button
            icon
            floated="right"
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
            <Button basic color="green">Approve</Button>
          </div>
        </Card.Content>

      </Card>
    )
  }
}


Todo.propTypes = propTypes
export default Todo
