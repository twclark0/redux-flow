import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import Counter from './App'

const initialState = { count: 0 }

const handleIncrement = (state, action) => ({
  count: state.count + 1
})

const handleDecrement = (state, action) => ({
  count: state.count - 1
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return handleIncrement(state, action)
    case 'DECREMENT':
      return handleDecrement(state, action)
    default:
      return state
  }
}

const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
