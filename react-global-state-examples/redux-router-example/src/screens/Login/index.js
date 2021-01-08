import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import PropTypes from 'prop-types'

const Login = props => {

    const history = useHistory();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLoginClick = () => {

        if (username === password) {
            props.setAuthData({token: "aa-bb-cc"});
            history.push("/home");
            return;
        }

        alert("Username and passoword are not the same!");

    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 200}}>
            <Form style={{width: 400}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>username</Form.Label>
                    <Form.Control type="text" placeholder="username" onChange={handleUsernameChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleLoginClick}> Login </Button>
            </Form>
        </div>
    );

}

Login.propTypes = {
    mainState: PropTypes.object.isRequired,
}


export default Login;
