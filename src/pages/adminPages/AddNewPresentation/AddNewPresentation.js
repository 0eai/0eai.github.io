import React, { useState, useRef, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./AddNewPresentation.css"
import Form from 'react-bootstrap/Form';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Spinner from 'react-bootstrap/Spinner';
import { useFirebase } from "../../../firebase/userContext";

export default function AddNewPresentation(props) {
    const { setNewPresentationPage, presentationData, setPresentationData } = props

    const [showYearError, setShowYearError] = useState(false)
    const [title, setTitle] = useState("")
    const [presentedOn, setPresentedOn] = useState("")
    const [presentationSlidesLink, setPresentationSlidesLink] = useState("")
    const [presentationVideoLink, setPresentationVideoLink] = useState("")

    const firebase = useFirebase();

    useEffect(() => {
        if (presentationData) {
            setTitle(presentationData.title)
            setPresentedOn(presentationData.presentedOn)
            setPresentationSlidesLink(presentationData.presentationSlidesLink)
            setPresentationVideoLink(presentationData.presentationVideoLink)
        }
    }, [])

    const handleSaveBtnClick = async () => {
        let data = { title, presentedOn, presentationVideoLink, presentationSlidesLink, isDeleted: false }
        if(presentationData){
            firebase.updatePresentationsData(localStorage.getItem("mySpaceUid"), presentationData.papersId,{...data})
        }
        else{
            let refArr = await firebase.presentationRefAndKey(localStorage.getItem('mySpaceUid'))
            firebase.pushData(refArr[0], data)
        }
        setTimeout(() => {
            setNewPresentationPage(false)
        }, 500);
        setPresentationData("")
    }

    const handleDeleteBtnClick = () => {
        firebase.updatePresentationDeleteField(localStorage.getItem("mySpaceUid"), presentationData.papersId, true)
        setTimeout(() => {
            setNewPresentationPage(false)
        }, 500);
        setPresentationData("")
    }

    return (
        <Container style={{ maxWidth: "100%", padding: '0' }} className="add-new-presentation-page">
            <Row className="top-nav-bar" style={{ height: '', position: 'fixed', width: '-webkit-fill-available', backgroundColor: 'white' }}>
                <Col style={{ display: 'flex', alignItems: 'center', padding: '0' }} md={6} sm={6} xs={6} lg={6}>
                    <i className="bi bi-arrow-left" style={{ cursor: 'pointer', display: 'flex', color: '#A5A5A5', fontSize: '1.5rem', margin: '15px' }} onClick={() => {
                        setNewPresentationPage(false)
                        setPresentationData("")
                    }}></i>
                    <span style={{ fontSize: '1.5rem', color: '#A5A5A5' }}>Presentation</span>
                </Col>
                <Col md={6} sm={6} xs={6} lg={6} style={{ textAlign: 'end', padding: '0' }}>
                    {presentationData ? <Button className="next-submit-btn" style={{ backgroundColor: 'red' }} onClick={handleDeleteBtnClick}
                    >Delete</Button> : ""}

                    <Button className="next-submit-btn" style={{ backgroundColor: '#4285f4' }} onClick={handleSaveBtnClick}
                    >Save</Button>{' '}

                </Col>


            </Row>

            <Row >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: "5rem" }}>
                    <Col style={{ margin: '2rem', padding: '2rem', maxWidth: '400px' }}>
                        <Form>
                            <Form.Group className="mb-5" controlId="formBasicTitle">
                                <Form.Label className="mb-3">Presentation title *</Form.Label>
                                <Form.Control onChange={(e) => {
                                    setTitle(e.target.value)
                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }}
                                    value={title} type="text" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicTitle">
                                <Form.Label className="mb-3">Presented on *</Form.Label>

                                <input type="number" className="form-control" onChange={(e) => {
                                    setPresentedOn(e.target.value)
                                    if (Number(e.target.value) > 2099 || Number(e.target.value) < 1900) { setShowYearError(true) }
                                    else setShowYearError(false)
                                }} min="1900" style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }} max="2099" step="1" placeholder="2016" value={presentedOn} />

                                {showYearError && <Form.Text className="text-muted">
                                    Min. 1900, Max. 2099
                                </Form.Text>}
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicTitle">
                                <Form.Label className="mb-3">Presentation slides link *</Form.Label>
                                <Form.Control onChange={(e) => {
                                    setPresentationSlidesLink(e.target.value)

                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }}
                                    value={presentationSlidesLink} type="text" />
                            </Form.Group>


                            <Form.Group className="" controlId="formBasicTitle">
                                <Form.Label className="mb-3">Presentation video link</Form.Label>
                                <Form.Control onChange={(e) => {
                                    setPresentationVideoLink(e.target.value)

                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }}
                                    value={ presentationVideoLink} type="text" />
                            </Form.Group>

                        </Form>
                    </Col>
                </div>
            </Row>
        </Container>
    )
}