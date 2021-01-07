import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { actionTypes } from './actionTypes'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)

store.subscribe(() => console.log(store.getState()))

const render = () => ReactDOM.render(
  <React.StrictMode>
    <Counter
      mainState={store.getState()}
      onIncrement={() => store.dispatch({ type: actionTypes.INCREMENT })}
      onDecrement={() => store.dispatch({ type: actionTypes.DECREMENT })}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

render();
store.subscribe(render);