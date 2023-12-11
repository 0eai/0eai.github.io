import React, { createContext, useContext, useState, useEffect } from "react";

import { getStorage } from "firebase/storage";

import {
    getAuth,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
    getDatabase,
    set,
    ref,
    update,
    child,
    get,
    push,
    query,
    orderByChild,
    equalTo,
    onValue,
} from "firebase/database";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };
const firebaseConfig = {
    apiKey: "AIzaSyBlJjSKmEGFUyDN6bf2VrwBqGQPHfvT5gs",
    authDomain: "aks-space.firebaseapp.com",
    databaseURL: "https://aks-space-default-rtdb.firebaseio.com",
    projectId: "aks-space",
    storageBucket: "aks-space.appspot.com",
    messagingSenderId: "996648471971",
    appId: "1:996648471971:web:5b2f2827c6c14124925e16",
    measurementId: "G-BESG5LGTWN"
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

const database = getDatabase(firebaseApp);

export const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState("")

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user0) => {
            if (user0) {
                const uid = user0.uid;
                localStorage.setItem('mySpaceUid', uid)
                setIsUserLoggedIn(true)
            } else {
                setIsUserLoggedIn(false)
            }
        });
    }, []);

    const getDataOnce = async (email) => {
        const data = query(
            child(ref(database), "users"),
            orderByChild("email"),
            equalTo(email)
        );
        const snapshot = await get(data);
        let ans = [];
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                ans.push(childSnapshot.val());
            });
        }
        return ans;
    };


    const getUserData = async (key, callback) => {
        const userRef = ref(database, `users/${key}`);
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            callback(data);
        });
    }

    const getUsersBio = async (key, callback) => {
        const userRef = ref(database, `bio/${key}`);
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            callback(data);
        });
    }

    const getPapers = async (key, callback) => {
        const paperRef = ref(database, `papers/${key}`);
        onValue(paperRef, (snapshot) => {
            const data = snapshot.val();
            callback(data);
        });
    }

    const getPresentations = async (key, callback) => {
        const presentationRef = ref(database, `presentations/${key}`);
        onValue(presentationRef, (snapshot) => {
            const data = snapshot.val();
            callback(data);
        });
    }

    const updatePapersData = (key,papersId, data) =>{
        const paperRef = ref(
            database,
            `papers/${key}/${papersId}`
        );
        set(paperRef, data)
            .then(() => {
                console.log("Data updated successfully!");
            })
            .catch((error) => {
                console.error("Error updating data:", error);
            });
        return;
    } 
    const updatePapersDeleteField = (key,papersId, isDeleted) => {
        const userRef = ref(
            database,
            `papers/${key}/${papersId}/isDeleted`
        );
        set(userRef, isDeleted)
            .then(() => {
                console.log("Status updated successfully!");
            })
            .catch((error) => {
                console.error("Error updating Status:", error);
            });
        return;
    };

    const updatePresentationsData = (key,presentationId, data) =>{
        const presentationRef = ref(
            database,
            `presentations/${key}/${presentationId}`
        );
        set(presentationRef, data)
            .then(() => {
                console.log("Data updated successfully!");
            })
            .catch((error) => {
                console.error("Error updating data:", error);
            });
        return;
    } 

    const updatePresentationDeleteField = (id,presentationId, isDeleted) => {
        const presentationRef = ref(
            database,
            `presentations/${id}/${presentationId}/isDeleted`
        );
        set(presentationRef, isDeleted)
            .then(() => {
                console.log("Status updated successfully!");
            })
            .catch((error) => {
                console.error("Error updating Status:", error);
            });
        return;
    };



    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    };

    const signinUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    };

    const signout = () => {
        return signOut(firebaseAuth);
    };

    const paperRefAndKey = (key) => {
        const newProjectRef = push(ref(database, `papers/${key}`))
        return [newProjectRef, newProjectRef.key]
    }

    const presentationRefAndKey = (key) => {
        const newProjectRef = push(ref(database, `presentations/${key}`))
        return [newProjectRef, newProjectRef.key]
    }

    const pushData = (ref, data) => {
        set(ref, { ...data });
        return ref.key;
    };

    const putData = (key, data) => {
        set(ref(database, key), { ...data });
    };

    // pushData(projectRefAndKey("requests/sample")[0],{data:"data",name:'name',className:'className'});

    // getListOfDevices(localStorage.getItem('uid'))

    let user = isUserLoggedIn ? true : false

    return (
        <FirebaseContext.Provider
            value={{
                signupUserWithEmailAndPassword,
                signinUserWithEmailAndPassword,
                putData,
                pushData,
                signout,
                getDataOnce,
                getUserData,
                getPapers,
                paperRefAndKey,
                updatePapersDeleteField,
                presentationRefAndKey,
                getPresentations,
                getUsersBio,
                updatePresentationDeleteField,
                user,
                updatePapersData,
                updatePresentationsData,
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    );
};
