import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid } from 'react-flexbox-grid'
import { Card, Button, Modal, Header, Form } from 'semantic-ui-react'

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


const propTypes = {
}


class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openModal: false,
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
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

  render() {
    const { openModal } = this.state
    return (
      <Grid
        center
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
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
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
                  <Form.Input fluid label="Title" placeholder="Todo Title" />
                </Form.Field>
                <Form.Field>
                  <Form.TextArea label="Task" placeholder="Describe the todo here..." />
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
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

Main.propTypes = propTypes

export default connect(mapStateToProps, matchDispatchToProps)(Main)
