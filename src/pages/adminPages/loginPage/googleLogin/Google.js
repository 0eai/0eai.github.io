import React, {  } from 'react';
import './Google.css';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
// import { useFirebase, firebaseAuth } from "../../../../../firebase/userContext.js"
import { GoogleAuthProvider, signInWithCredential,onAuthStateChanged } from "firebase/auth";



const Google = (props) => {


//   const firebase = useFirebase()
  const navigate = useNavigate();
  const {  setAddressForm, setUserData } = props

  return (
    <GoogleLogin

      onSuccess={async credentialResponse => {
        // const googleData = jwtDecode(credentialResponse.credential);
        // const credential = GoogleAuthProvider.credential(credentialResponse.credential);
        // await signInWithCredential(firebaseAuth, credential)
        // onAuthStateChanged(firebaseAuth, (user) => {
        //   if (user) {
        //     const uid = user.uid;
        //     localStorage.setItem('uid',uid)
        //   }
        // });

        // const data = await firebase.getDataOnce(googleData.email)
        // let userDataObj = {
        //   name:googleData.name,
        //   email:googleData.email,
        //   profile_pic_url:googleData.picture,
        //   user_type:"client"
        // }

        // localStorage.setItem('email',googleData.email)
        // localStorage.setItem('profileImageUrl',googleData.picture)
        // localStorage.setItem('name',googleData.name)

        // if(!data.length){
        //   setUserData({...userDataObj})
        //   setAddressForm('open')
        // }
        // else{
          navigate('/admin');
        // }
      }}
      onError={() => {
        console.log('Login Failed');
      }}
      buttonText="Login"
    />
  )
}

export default Google;