import React, { useState, useRef } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./EditBioPage.css"
import Form from 'react-bootstrap/Form';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { storage, useFirebase } from "../../../firebase/userContext"
import Spinner from 'react-bootstrap/Spinner';

export default function EditBioPage(props) {
    // const { setAddNewRequest } = props

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [position, setPosition] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const [github, setGithub] = useState("")
    const [twitter, setTwitter] = useState("")
    const [googleSchola, setGoogleScholar] = useState("")
    const [linkedIn, setLinkedIn] = useState("")
    // const firebase = useFirebase()






    // const uploadFileInStorage = async (key, file) => {
    //     if (!file) {

    //     }
    //     else {
    //         let uid = localStorage.getItem('uid')
    //         const storageRef = ref(storage, `uploads/${uid}/${key}/${file.name}`);
    //         await uploadBytes(storageRef, file);
    //         const downloadURL = await getDownloadURL(storageRef);
    //         return downloadURL
    //     }

    // }

    // const handleUpload = async () => {
    //     setClickedSubmit(true)
    //     let uid = localStorage.getItem('uid')
    //     let refAndKey = await firebase.projectRefAndKey(`requests/${uid}`)
    //     let url = await uploadFileInStorage(refAndKey[1], dataSample)
    //     // console.log(prevData,'data')
    //     firebase.pushData(refAndKey[0], { title, description, requestFor, modality, problemType, classificationModel, trainingType, expectedDeliveryDate, classArray, continuousTraining, dataSample: { name: dataSample.name, downloadURL: url }, status: 'pending' })
    // }


    return (
        <Container style={{ maxWidth: "100%", padding: '0', flex: '1' }} className="edit-bio-page">
            <Row style={{ margin: '0', padding: '3rem' }} >
                <span style={{ fontSize: '2rem', color: '#999999', fontWeight: '600', fontSize: '2.2rem', padding: '0' }}
                // style={{ color: '#999999', fontWeight: '600', fontSize: '2.2rem', marginRight: '2rem' }}
                >Home</span>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col style={{ margin: '4rem', maxWidth: '400px' }}>
                        <Form>
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
                                }} type="text" value={googleSchola} placeholder="" />
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
                    </Col>
                </div>
            </Row>
        </Container>
    )
}