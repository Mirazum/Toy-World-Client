import  { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import SocialLogin from './SocialLogin';

import { AuthContext } from '../providers/AuthProviders';




const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [error, setError] = useState('');
   const [success, setSuccess] =useState('');
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handelLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                setError('')
                navigate(from, { replace: true })  
            })
            .catch(error => {
                setError("user's email address or password doesn't match")
            })
    }

    return (
        <Container className='w-25 mx-auto m-4 p-4 md:min-h-[calc(100vh-341px)]'>
            <h3>Please Login</h3>
            <Form onSubmit={handelLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <div className='d-flex flex-column p-2'>
                <Button variant="outline-primary" type="submit" className='mb-2'>
                    Login
                </Button>
                <SocialLogin></SocialLogin>
                </div>
              
                <br />
                <Form.Text className="text-secondary">
                    Do not Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
            <p className='text-danger'>{error}</p>
        </Container>
    );
};

export default Login;