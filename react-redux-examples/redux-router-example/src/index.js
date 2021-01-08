// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {createStore} from 'redux';
import {actionTypes} from './actionTypes';
import counter from './reducers';
import Counter from './screens/Counter';
import Login from './screens/Login';
import Home from './screens/Home';
import Customer from './screens/Customer';

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
                <Link className="nav-link" to="/customer">customer</Link>
                <Link className="nav-link" onClick={() => store.dispatch({type: actionTypes.LOGOUT})}
                      to="/login">logout</Link>
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
                    <Route path="/home">
                        <Home mainState={store.getState()}/>
                    </Route>
                    <Route path="/counter">
                        <Counter
                            mainState={store.getState()}
                            onIncrement={() => store.dispatch({type: actionTypes.INCREMENT})}
                            onDecrement={() => store.dispatch({type: actionTypes.DECREMENT})}
                        />
                    </Route>
                    <Route path="/customer">
                        <Customer
                            mainState={store.getState()}
                        />
                    </Route>
                    <Route path="/">
                        <Login
                            mainState={store.getState()}
                            setAuthData={(data) => store.dispatch({type: actionTypes.AUTH_DATA, data: data})}
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
