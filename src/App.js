// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import logo from './logo.svg'
import './App.css'

export type Increment = { type: 'INCREMENT' }

export type Decrement = { type: 'DECREMENT' }

export type Action = Increment | Decrement

export type State = { count: number }

type Props = {
  decrement: () => Decrement,
  increment: () => Increment,
  count: number
}

class Counter extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button className='minus' onClick={this.props.decrement}>-</button>
        <span>{this.props.count}</span>
        <button className='add' onClick={this.props.increment}>+</button>
      </div>
    )
  }
}

const actions = {
  increment: (): Increment => ({ type: 'INCREMENT' }),
  decrement: (): Decrement => ({ type: 'DECREMENT' })
}

const mapStateToProps = (state): State => ({ count: state.count })

const connector: Connector<{}, Props> = connect(mapStateToProps, actions)

export default connector(Counter)
