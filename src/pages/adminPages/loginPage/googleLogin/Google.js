import React, { } from 'react';
import './Google.css';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useFirebase, firebaseAuth } from "../../../../firebase/userContext.js"
import { GoogleAuthProvider, signInWithCredential, onAuthStateChanged } from "firebase/auth";



const Google = (props) => {


  const firebase = useFirebase()
  const navigate = useNavigate();
  const { setAddressForm, setUserData } = props

  return (
    <GoogleLogin

      onSuccess={async credentialResponse => {
        const googleData = jwtDecode(credentialResponse.credential);
        const credential = GoogleAuthProvider.credential(credentialResponse.credential);
        await signInWithCredential(firebaseAuth, credential)

        let userDataObj = {
          name: googleData.name,
          email: googleData.email,
          profile_pic_url: googleData.picture
        }
        onAuthStateChanged(firebaseAuth, (user) => {
          if (user) {
            const uid = user.uid;
            localStorage.setItem('mySpaceUid', uid)
          }
        });

        const data = await firebase.getDataOnce(googleData.email)
        localStorage.setItem('mySpaceProfileImageUrl', googleData.picture)

        if (!data.length) {
          firebase.putData(`users/${localStorage.getItem('mySpaceUid')}`, userDataObj)
        }

        navigate('/admin');

      }}
      onError={() => {
        console.log('Login Failed');
      }}
      buttonText="Login"
    />
  )
}

export default Google;