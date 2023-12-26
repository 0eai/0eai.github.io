import React, { useState, useRef, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./AddNewPapers.css"
import Form from 'react-bootstrap/Form';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Spinner from 'react-bootstrap/Spinner';
import { useFirebase } from "../../../firebase/userContext";

export default function AddNewPapers(props) {
    const { setNewPapersPage, setPapersData, papersData } = props
    const [showYearError, setShowYearError] = useState(false)
    const [title, setTitle] = useState("")
    const [authors, setAuthors] = useState("")
    const [publishedOn, setPublishedOn] = useState("")
    const [paperLink, setPaperLink] = useState("")
    const [arvixLink, setArvixLink] = useState("")
    const [sourceCodeLink, setSetSourceCodeLink] = useState("")
    const [presentationSlidesLink, setPresentationSlidesLink] = useState("")
    const [presentationVideoLink, setPresentationVideoLink] = useState("")

    const firebase = useFirebase()


useEffect(()=>{
    if(papersData){
        setTitle(papersData.title)
        setAuthors(papersData.authors)
        setPublishedOn(papersData.publishedOn)
        setPaperLink(papersData.paperLink)
        setArvixLink(papersData.arvixLink)
        setSetSourceCodeLink(papersData.sourceCodeLink)
        setPresentationVideoLink(papersData.presentationVideoLink)
        setPresentationSlidesLink(papersData.presentationSlidesLink)
    }
},[])

    const handleSaveBtnClick = async () => {
        let data = { title, authors, publishedOn, paperLink, arvixLink, sourceCodeLink, presentationSlidesLink, presentationVideoLink, isDeleted: false }
        if(papersData){
            firebase.updatePapersData(localStorage.getItem("mySpaceUid"), papersData.papersId,{...data})
        }
        else{
            let refArr = await firebase.paperRefAndKey(localStorage.getItem('mySpaceUid'))
            firebase.pushData(refArr[0], data)
        }
       
        setTimeout(() => {
            setNewPapersPage(false)
        }, 500);
        setPapersData("")
    }

    const handleDeleteBtnClick = async () => {

        firebase.updatePapersDeleteField(localStorage.getItem("mySpaceUid"), papersData.papersId, true)
        setTimeout(() => {
            setNewPapersPage(false)
        }, 500);
        setPapersData("")
    }


    return (
        <Container style={{ maxWidth: "100%", padding: '0' }} className="add-new-papers-page">
            <Row className="top-nav-bar" style={{ height: '', position: 'fixed', width: '-webkit-fill-available', backgroundColor: 'white' }}>
                <Col style={{ display: 'flex', alignItems: 'center', padding: '0' }} md={6} sm={6} xs={6} lg={6}>
                    <i className="bi bi-arrow-left" style={{ cursor: 'pointer', display: 'flex', color: '#A5A5A5', fontSize: '1.5rem', margin: '15px' }} onClick={() => {
                        setNewPapersPage(false)
                        setPapersData("")
                    }}></i>
                    <span style={{ fontSize: '1.5rem', color: '#A5A5A5' }}>Paper</span>
                </Col>
                <Col md={6} sm={6} xs={6} lg={6} style={{ textAlign: 'end', padding: '0' }}>
                    {papersData ? <Button className="next-submit-btn" style={{ backgroundColor: 'red' }} onClick={handleDeleteBtnClick}
                    >Delete</Button> : ""}

                    <Button className="next-submit-btn" style={{ backgroundColor: '#4285f4' }} onClick={handleSaveBtnClick}
                    >Save</Button>{' '}

                </Col>
            </Row>

            <Row >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: "4rem" }}>
                    <Col style={{ margin: '2rem', padding: '2rem', maxWidth: '400px' }}>
                        <Form>
                            <Form.Group className="mb-5" controlId="formBasicTitle">
                                <Form.Label className="mb-3">Title *</Form.Label>
                                <Form.Control onChange={(e) => {
                                    setTitle(e.target.value)
                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }}
                                    value={title} type="text" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicDescription">
                                <Form.Label className="mb-3">Authors *</Form.Label>
                                <Form.Control required onChange={(e) => {
                                    setAuthors(e.target.value)
                                }} value={ authors} style={{ borderRadius: '1rem', borderWidth: '.1rem', borderColor: 'black' }} as="textarea" rows={6} placeholder="" />
                            </Form.Group>

                            <Form.Group style={{ display: 'flex', flexDirection: 'column' }} className="mb-5" controlId="formBasicPublishedOn">
                                <Form.Label className="mb-3">Published on *</Form.Label>

                                <input type="number" className="form-control" onChange={(e) => {
                                    setPublishedOn(e.target.value)
                                    if (Number(e.target.value) > 2099 || Number(e.target.value) < 1900) { setShowYearError(true) }
                                    else setShowYearError(false)
                                }} min="1900" style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }} max="2099" step="1" placeholder="2016" value={ publishedOn} />

                             
                                {showYearError && <Form.Text className="text-muted">
                                    Min. 1900, Max. 2099
                                </Form.Text>}
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicPaperLink">
                                <Form.Label className="mb-3">Paper link *</Form.Label>
                                <Form.Control onChange={(e) => {
                                    setPaperLink(e.target.value)
                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }}
                                    value={ paperLink} type="text" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicArvixLink">
                                <Form.Label className="mb-3">Arvix link *</Form.Label>
                                <Form.Control onChange={(e) => {
                                    setArvixLink(e.target.value)
                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }}
                                    value={ arvixLink} type="text" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicSourceCodeLink">
                                <Form.Label className="mb-3">Source Code link *</Form.Label>
                                <Form.Control onChange={(e) => {
                                    setSetSourceCodeLink(e.target.value)
                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }}
                                    value={ sourceCodeLink} type="text" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicPresentationSlidesLink ">
                                <Form.Label className="mb-3">Presentation slides link *</Form.Label>
                                <Form.Control onChange={(e) => {
                                    setPresentationSlidesLink(e.target.value)
                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }}
                                    value={ presentationSlidesLink} type="text" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicPresentationVideoLink">
                                <Form.Label className="mb-3">Presentation video link </Form.Label>
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