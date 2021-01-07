import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { actionTypes } from './ActionTypes'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)

const render = () => ReactDOM.render(
  <React.StrictMode>
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: actionTypes.INCREMENT })}
      onDecrement={() => store.dispatch({ type: actionTypes.DECREMENT })}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

render();
store.subscribe(render);