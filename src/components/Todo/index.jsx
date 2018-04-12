import React, { PureComponent, PropTypes } from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'

import styles from './todo.css'

const propTypes = {
}

class Todo extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Button
            icon
            floated="right"
          >
            <Icon name="remove" />
          </Button>
          <Card.Header>
            Steve Sanders Steve Sanders Steve Sanders
          </Card.Header>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>  Steve wants to add you to the group <strong>best friends</strong>  Steve wants to add you to the group <strong>best friends</strong>  Steve wants to add you to the group <strong>best friends</strong>  Steve wants to add you to the group <strong>best friends</strong>  Steve wants to add you to the group <strong>best friends</strong>
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
