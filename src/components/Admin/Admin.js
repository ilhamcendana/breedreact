import React, { useState } from 'react';
import './Admin.css';
import { Form, Button, Spinner } from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/auth';

const Admin = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loading, setloading] = useState(false);

    const loginEvent = (e) => {
        e.preventDefault();
        if (email === '' || pass === '') {
            alert('Semua kolom harus diisi!')
        } else {
            setloading(true);
            firebase.auth().signInWithEmailAndPassword(email, pass)
                .then(() => {
                    setEmail('');
                    setPass('');
                    setloading(false);
                })
                .catch(err => {
                    alert(err.message);
                    setloading(false);
                    console.log(err);
                })
        }
    }

    return (
        <div className='adminBG'>
            <div style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Form className='form' onSubmit={loginEvent}>
                    {loading ?
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Spinner animation='border' style={{ color: 'lightblue' }} />
                        </div>
                        : <h1 className='text-center'>LUVVV BIRDS ADMIN</h1>}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={e => setPass(e.target.value)}
                            value={pass}
                        />
                    </Form.Group>
                    <Button variant="info" type="submit" block >
                        LOGIN
                </Button>
                </Form>
            </div>
        </div>
    );
}

export default Admin;