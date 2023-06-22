import  { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';




const Register = () => {
 const {createUser}= useContext(AuthContext)
   const [error, setError] = useState('');
   const [success, setSuccess] =useState('');

    const handelRegister= event =>{
        event.preventDefault();
        const from=event.target;
        const name= from.name.value;
        const photo= from.photo.value;
        const email= from.email.value;
        const password = from.password.value;
        console.log(name,photo,email,password)
        from.reset('')

        createUser(email,password)
        .then(result=>{
            const createdUser= result.user
            console.log(createdUser)
            setError('')
            setSuccess('User has been created successfully')
         
        })
        .catch(error=>{
            setError(error.message)
        })

    }

   



    return (
        <Container className='w-25 mx-auto m-4 p-4'>
            <h3>Please Register</h3>
            <Form onSubmit={handelRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                
                <Button variant="primary"  type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
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

export default Register;



