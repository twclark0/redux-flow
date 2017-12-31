import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'

class Counter extends Component {
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
  increment: () => ({ type: 'INCREMENT' }),
  decrement: () => ({ type: 'DECREMENT' })
}

const mapStateToProps = state => ({ count: state.count })

const connector = connect(mapStateToProps, actions)

export default connector(Counter)
