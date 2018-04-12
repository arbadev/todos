import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Card } from 'semantic-ui-react'

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
    }
  }

  render() {
    return (
      <Grid
        center
      >
        <Card.Group>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </Card.Group>
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
