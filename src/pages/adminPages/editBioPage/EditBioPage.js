import React, { useState, useRef, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./EditBioPage.css"
import Form from 'react-bootstrap/Form';
import { ref, uploadBytes, getDownloadURL, getMetadata } from 'firebase/storage';
import { storage, useFirebase } from "../../../firebase/userContext"
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";


export default function EditBioPage(props) {
    const { setPageOpen } = props
    const navigate = useNavigate()
    const [userData, setUserData] = useState("")

    const [profileLogo, setProfileLogo] = useState("")
    const [profilePicture, setProfilePicture] = useState("")
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [position, setPosition] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const [github, setGithub] = useState("")
    const [twitter, setTwitter] = useState("")
    const [googleScholar, setGoogleScholar] = useState("")
    const [linkedIn, setLinkedIn] = useState("")

    const [savedLogo,setSavedLogo] = useState("")
    const [savedPicture,setSavedPicture] = useState("")

    const logoInputRef = useRef(null)
    const profileInputRef = useRef(null)

    const firebase = useFirebase()

    // const handleUpload = async () => {
    //     setClickedSubmit(true)
    //     let uid = localStorage.getItem('uid')
    //     let refAndKey = await firebase.projectRefAndKey(`requests/${uid}`)
    //     let url = await uploadFileInStorage(refAndKey[1], dataSample)
    //     // console.log(prevData,'data')
    //     firebase.pushData(refAndKey[0], { title, description, requestFor, modality, problemType, classificationModel, trainingType, expectedDeliveryDate, classArray, continuousTraining, dataSample: { name: dataSample.name, downloadURL: url }, status: 'pending' })
    // }

    const uploadProfileLogoInStorage = async (file) => {
        try {
            let uid = localStorage.getItem('mySpaceUid')
            const storageRef = ref(storage, `profile_picture_&_logo/${uid}/profile_logo`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL

        }
        catch (err) {
            console.error(err.message)
        }
    }

    const uploadProfilePictureInStorage = async (path, file) => {
        try {
            let uid = localStorage.getItem('mySpaceUid')
            const storageRef = ref(storage, `profile_picture_&_logo/${uid}/profile_picture`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL
        }
        catch (err) {
            console.error(err.message)
        }
    }

    const handleClickSaveBio = async () => {
        let userdata = { name, position, location, description, github, twitter, googleScholar, email, linkedIn }
        let uid = localStorage.getItem('mySpaceUid');
        if (profileLogo != savedLogo ) {
            const profileLogoUrl = await uploadProfileLogoInStorage(profileLogo)
            userdata.profile_logo = profileLogoUrl
        }
        else {
            const storageRef = ref(storage, `defaults/profile_logo/logo.png`);
            const downloadURL = await getDownloadURL(storageRef);
            userdata.profile_logo = downloadURL
        }

        if (profilePicture != savedPicture) {
            const profilePictureUrl = await uploadProfilePictureInStorage(profilePicture)
            userdata.profile_picture = profilePictureUrl
        }
        else {
            const storageRef = ref(storage, `defaults/profile_picture/picture.jpeg`);
            const downloadURL = await getDownloadURL(storageRef);
            userdata.profile_picture = downloadURL
        }


        firebase.putData(`bio/${localStorage.getItem("mySpaceUid")}`, userdata)
        setTimeout(() => {
            // navigate('/admin')
            window.scrollTo({ top: 0, behavior: "instant" });
        }, 500);
    }

    useEffect(() => {
        firebase.getUsersBio(localStorage.getItem("mySpaceUid"), (data) => {
            if (data) {
                // console.log(data)
                setName(data.name)
                setEmail(data.email)
                setDescription(data.description)
                setGithub(data.github)
                setGoogleScholar(data.googleScholar)
                setLocation(data.location)
                setLinkedIn(data.linkedIn)
                setPosition(data.position)
                setTwitter(data.twitter)
                setProfileLogo(data.profile_logo)
                setProfilePicture(data.profile_picture)
            }
            else {
                firebase.getUserData(localStorage.getItem("mySpaceUid"),async (data) => {
                    if (data) {
                        const storedLogoRef = ref(storage, `defaults/profile_logo/logo.png`);
                        const logoDownloadURL = await getDownloadURL(storedLogoRef);
                        const storedPictureRef = ref(storage, `defaults/profile_picture/picture.jpeg`);
                        const pictureDownloadURL = await getDownloadURL(storedPictureRef);
                        setProfileLogo(logoDownloadURL)
                        setProfilePicture(pictureDownloadURL)
                        setSavedLogo(logoDownloadURL)
                        setSavedPicture(pictureDownloadURL)
                        setName(data.name)
                        setEmail(data.email)
                    }
                })
            }
        })

    }, [])

    return (
        <Container style={{ maxWidth: "100%", padding: '0', flex: '1' }} className="edit-bio-page">
            <Row style={{ margin: '0', padding: '3rem' }} >
                <span style={{ fontSize: '2rem', color: '#999999', fontWeight: '600', fontSize: '2.2rem', padding: '0' }}
                >Home</span>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col style={{ margin: '4rem', maxWidth: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Form style={{ width: '100%' }}>

                            <Form.Group className="mb-5" controlId="formBasicTwitter">
                                <Form.Label className="mb-3">Profile logo </Form.Label>
                                <div
                                    onClick={() => {
                                        logoInputRef.current.click()
                                    }}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '100%',
                                        height: '300px',
                                        border: '4rem solid #efefef',
                                        borderRadius: '5px'
                                    }}
                                >
                                    <img
                                        src={!profileLogo.type?profileLogo:URL.createObjectURL(profileLogo)}
                                        alt="Profile Logo"
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                                <Form.Control ref={logoInputRef} onChange={async (e) => {
                                    setProfileLogo(e.target.files[0])
                                }} accept="image/*" style={{
                                    display: 'none', borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }} type="file" placeholder="logo" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicTwitter">
                                <Form.Label className="mb-3">Profile picture </Form.Label>
                                <div
                                    onClick={() => {
                                        profileInputRef.current.click()
                                    }}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '100%',
                                        height: '300px',
                                        border: '4rem solid #efefef',
                                        borderRadius: '5px'
                                    }}
                                >
                                    <img
                                    
                                        src={!profilePicture.type?profilePicture:URL.createObjectURL(profilePicture)}
                                        alt="Profile Logo"
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                                <Form.Control accept="image/*" ref={profileInputRef} onChange={(e) => {
                                    setProfilePicture(e.target.files[0])
                                }} style={{
                                    display:'none',borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }} type="file" placeholder="picture" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicName">
                                <Form.Label className="mb-3">Name *</Form.Label>
                                <Form.Control required onChange={(e) => {
                                    setName(e.target.value)
                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }}
                                    value={name} type="text" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicPosition">
                                <Form.Label className="mb-3">Position *</Form.Label>
                                <Form.Control required onChange={(e) => {
                                    setPosition(e.target.value)
                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }} type="text" value={position} placeholder="" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicLocation">
                                <Form.Label className="mb-3">Location *</Form.Label>
                                <Form.Control required onChange={(e) => {
                                    setLocation(e.target.value)
                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }} type="text" value={location} placeholder="" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicDescription">
                                <Form.Label className="mb-3">Description *</Form.Label>
                                <Form.Control required onChange={(e) => {
                                    setDescription(e.target.value)
                                }} value={description} style={{ borderRadius: '1rem', borderWidth: '.1rem', borderColor: 'black' }} type="text" as='textarea' rows={6} placeholder="" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicEmailAddress">
                                <Form.Label className="mb-3">Email address *</Form.Label>
                                <Form.Control required onChange={(e) => {
                                    setEmail(e.target.value)
                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }} value={email} type="text" placeholder="" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicLinkedIn">
                                <Form.Label className="mb-3">LinkedIn *</Form.Label>
                                <Form.Control required onChange={(e) => {
                                    setLinkedIn(e.target.value)
                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }} type="text" value={linkedIn} placeholder="" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicGoogleScholar">
                                <Form.Label className="mb-3">Google Scholar *</Form.Label>
                                <Form.Control required onChange={(e) => {
                                    setGoogleScholar(e.target.value)
                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }} type="text" value={googleScholar} placeholder="" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicGithub">
                                <Form.Label className="mb-3">Github *</Form.Label>
                                <Form.Control required onChange={(e) => {
                                    setGithub(e.target.value)
                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }} type="text" value={github} placeholder="" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicTwitter">
                                <Form.Label className="mb-3">Twitter *</Form.Label>
                                <Form.Control required onChange={(e) => {
                                    setTwitter(e.target.value)
                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }} type="text" value={twitter} placeholder="" />
                            </Form.Group>


                        </Form>
                        {/* {console.log(name && position && location && description && email && googleScholar && twitter && github && linkedIn)} */}
                        <Button className="save-bio-btn" disabled={name && position && location && description && email && googleScholar && twitter && github && linkedIn ? false : true} onClick={handleClickSaveBio}>Submit</Button>
                    </Col>
                </div>
            </Row>
        </Container>
    )
}