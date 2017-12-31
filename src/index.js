// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import Counter from './App'
import type { Increment, Decrement, Action, State } from './App'

const initialState: State = { count: 0 }

const handleIncrement = (state: State, action: Increment): State => ({
  count: state.count + 1
})

const handleDecrement = (state: State, action: Decrement): State => ({
  count: state.count - 1
})

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return handleIncrement(state, action)
    case 'DECREMENT':
      return handleDecrement(state, action)
    default:
      return state
  }
}

const store: State = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)
// $FlowIgnore
ReactDOM.render(<App />, document.getElementById('root'))
