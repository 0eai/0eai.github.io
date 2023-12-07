import React, { useState, useRef } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./AddNewPapers.css"
import Form from 'react-bootstrap/Form';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Spinner from 'react-bootstrap/Spinner';

export default function AddNewPapers(props) {
const {setNewPapersPage,setPapersData,papersData} = props



    return (
        <Container style={{ maxWidth: "100%", padding: '0' }} className="add-new-papers-page">
            <Row className="top-nav-bar" style={{ height: '' }}>
                <Col style={{ display: 'flex', alignItems: 'center', padding: '0' }} md={6} sm={6} xs={6} lg={6}>
                    <i className="bi bi-arrow-left" style={{ cursor: 'pointer', display: 'flex', color: '#A5A5A5', fontSize: '1.5rem', margin: '15px' }} onClick={() => {
                        setNewPapersPage(false)
                        setPapersData("")
                    }}></i>
                    <span style={{ fontSize: '1.5rem', color: '#A5A5A5' }}>Paper</span>
                </Col>
                <Col md={6} sm={6} xs={6} lg={6} style={{ textAlign: 'end', padding: '0' }}>
                   {papersData? <Button className="next-submit-btn" style={{ backgroundColor: 'red' }}
                    >Delete</Button>:""}

                    <Button className="next-submit-btn" style={{ backgroundColor: '#4285f4' }}
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

                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }}
                                 value={papersData?papersData.title:""}   type="text" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicDescription">
                                <Form.Label className="mb-3">Description *</Form.Label>
                                <Form.Control required onChange={(e) => {

                                }} style={{ borderRadius: '1rem', borderWidth: '.1rem', borderColor: 'black' }} as="textarea" rows={6} placeholder="" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicPublishedOn">
                                <Form.Label className="mb-3">Published on *</Form.Label>
                                <Form.Control onChange={(e) => {

                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }}
                                    type="text" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicPaperLink">
                                <Form.Label className="mb-3">Paper link *</Form.Label>
                                <Form.Control onChange={(e) => {

                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }}
                                    type="text" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicArvixLink">
                                <Form.Label className="mb-3">Arvix link *</Form.Label>
                                <Form.Control onChange={(e) => {

                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }}
                                    type="text" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicSourceCodeLink">
                                <Form.Label className="mb-3">Source Code link *</Form.Label>
                                <Form.Control onChange={(e) => {

                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }}
                                    type="text" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicPresentationSlidesLink ">
                                <Form.Label className="mb-3">Presentation slides link *</Form.Label>
                                <Form.Control onChange={(e) => {

                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }}
                                    type="text" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicPresentationVideoLink">
                                <Form.Label className="mb-3">Presentation video link *</Form.Label>
                                <Form.Control onChange={(e) => {

                                }} style={{
                                    borderRadius: '.4rem', borderWidth: '.1rem', borderColor: 'black', height: '50px',
                                }}
                                    type="text" />
                            </Form.Group>
                        </Form>
                    </Col>
                </div>
            </Row>
        </Container>
    )
}