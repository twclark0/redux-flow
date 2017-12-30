import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import Counter from './App'
import registerServiceWorker from './registerServiceWorker'

const initialState = { count: 0 }

const handleIncrement = (state, action) => ({ count: state.count + 1 })

const handleDecrement = (state, action) => ({ count: state.count - 1 })

const reducer = (state = initialState, action) => {
  const handlers = {
      'INCREMENT': handleIncrement,
      'DECREMENT': handleDecrement
  }
  return handlers[action.type] ?
            handlers[action.type](state, action)
            : state
}

const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
