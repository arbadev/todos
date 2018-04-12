import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import 'normalize-css'

import styles from './app.css'
// import Header from '../../components/Header'
import Main from '../Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
    }
  }

  render() {
    return (
      <HashRouter basename="/">
        <div
          className={styles.app}
        >

          <Switch>
            <Route exact path="/"
              render={
                () => {
                  return (
                    <Main />
                  )
                }}
            />
          </Switch>

        </div>
      </HashRouter>
    )
  }
}

export default App
