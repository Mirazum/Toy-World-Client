
import { useState } from "react";
import { FaGoogle } from 'react-icons/fa';

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  
} from "firebase/auth";

import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../firebase/firebase.config";

const SocialLogin = () => {
    const [user, setUser] = useState({});
    const[ error, setError]=useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
  
  
    const handleGoogleLogin = () => {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          setUser(user);
          console.log(user);
          navigate(from, { replace: true }) 
          setError.reset('')
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    };
  
 
    return (
      <div>
        <div className="text-center">
          
           <Button onClick={handleGoogleLogin} className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
        </div>
        

      </div>
    );
};

export default SocialLogin;
