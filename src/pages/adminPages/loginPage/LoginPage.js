import React, { useEffect } from 'react';
import './LoginPage.css';
import { Row, Col } from 'react-bootstrap';
// import { firebaseAuth } from '../../firebase/userContext';
// import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Google from './googleLogin/Google';
import { GoogleOAuthProvider } from "@react-oauth/google";


export default function LogIn() {

    let navigate = useNavigate()

    //   useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
    //       if (user && localStorage.length) {
    //         console.log('logedin')
    //         navigate("/home")
    //       }
    //     });
    //     return () => {
    //       unsubscribe();
    //     };
    //   }, [navigate]);
    const clientId =
    "996648471971-gtomuhg2t2qhf3711o5favkrnaje7rf6.apps.googleusercontent.com";

    return (
        <div className='login__container' >
            <Row>
                <Col md={6} className="text-center">

                    <div style={{ position: 'relative', height: '100vh',borderRight:'1px solid 	#efefef' }}>

                        <div className="left-content">
                            <img style={{ height: '20%', maxWidth: '70%', maxHeight: '120px' }} src='./images/logo.jpeg' alt="Logo" />
                        </div>

                    </div>
                </Col>
                <Col md={6} className="text-center">
                    <div className="loginForm__container">
                        <div className="loginForm__content">
                            <div className="signin__google-link">
                                <GoogleOAuthProvider clientId={clientId}>
                                    <Google />
                                </GoogleOAuthProvider>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}


