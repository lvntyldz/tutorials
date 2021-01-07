// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Link, Route, Switch
} from "react-router-dom"
import { createStore } from 'redux'
import { actionTypes } from './actionTypes'
import Counter from './components/Counter'
import counter from './reducers'



export const Login = () => {
  return <div>Login</div>
}

export const Home = () => {
  return <div>Home</div>
}

const store = createStore(counter)

store.subscribe(() => console.log(store.getState()))

const getNavBarView = () => {

  if (!store.getState().auth) {
    return null;
  }

  return (
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        <Link className="nav-link" to="/home">home</Link>
        <Link className="nav-link" to="/counter">counter</Link>
        <Link className="nav-link" onClick={() => store.dispatch({ type: actionTypes.LOGOUT })} to="/login">logout</Link>
      </Nav>
    </Navbar>
  )
}

const render = () => ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        {getNavBarView()}

        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/counter">
            <Counter
              mainState={store.getState()}
              onIncrement={() => store.dispatch({ type: actionTypes.INCREMENT })}
              onDecrement={() => store.dispatch({ type: actionTypes.DECREMENT })}
            />
          </Route>
        </Switch>
      </div>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

render();
store.subscribe(render);