import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import PropTypes from 'prop-types'

const Customer = props => {

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    const handleAddCustomerClick = (e) => {
        e.preventDefault();
        console.warn("firstname : ", firstname);
        console.warn("lastname : ", lastname);
        console.warn("email : ", email);
        console.warn("phone : ", phone);
        alert("Look at the console log");
    }

    return (
        <div style={{display: 'flex', marginLeft: 30, marginTop: 30}}>
            <Form style={{width: 400}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control type="text" placeholder="Firstname" onChange={(e) => setFirstname(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control type="text" placeholder="Lastname" onChange={(e) => setLastname(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleAddCustomerClick}> Add Customer </Button>
            </Form>
        </div>
    );

}

Customer.propTypes = {
    mainState: PropTypes.object.isRequired,
}


export default Customer;
