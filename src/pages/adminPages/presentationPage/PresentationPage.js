import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { Col, Container, Row, Form, InputGroup, Button } from "react-bootstrap";
import "./PresentationPage.css"
import { useFirebase } from "../../../firebase/userContext";
import AddNewPresentation from "../AddNewPresentation/AddNewPresentation";

export default function AddPapersPage(props) {
    // let { setOpenProjectsPage, setProjectData } = props
    let [presentationData, setPresentationData] = useState([])
    const [presentationsDataArray, setPresentationsDataArray] = useState([])
    const firebase = useFirebase();
    const [statusValue, setStatusValue] = useState("")
    const [searchQuery, setSearchQuery] = useState("");
    const [newPresentationPage, setNewPresentationPage] = useState("")

    useEffect(() => {
        setPresentationData("")
        firebase.getPresentations(localStorage.getItem('mySpaceUid'),(data) => {
            let arr = []
            for (let papersId in data) {
               if(!data[papersId].isDeleted) arr.push({...data[papersId],papersId})
            }
            setPresentationsDataArray([...arr])
        })
    },[])

    const filteredArray = presentationsDataArray.filter((elem) => {
        const { title } = elem;
        const lowerCaseQuery = searchQuery.toLowerCase();
        return (
            (title && title.toLowerCase().includes(lowerCaseQuery))
        );
    });

    return (
        <div style={{ display: 'flex', height: '100%', flex: '1' }} className="add-paper-page">
            <Container style={{ padding: '0', margin: '0', minWidth: '100%' }}>
                {!newPresentationPage ? <Row style={{ width: 'inherit', margin: '0', padding: '3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '0', paddingBottom: '3rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h2 style={{ color: '#999999', fontWeight: '600', fontSize: '2.2rem', marginRight: '2rem' }}>Presentation</h2>
                            <Button onClick={() => setNewPresentationPage(true)} className="add-new-btn">
                                <i className="bi bi-plus"></i>
                                <span style={{ margin: '5px' }}>New</span>
                            </Button>
                        </div>

                        <div className="" style={{ display: 'flex', height: '40px' }}>
                            <Form.Select style={{ boxShadow: 'none', backgroundColor: "#f2f2f2", border: 'none', minWidth: '100px' }} onChange={(e) => setStatusValue(e.target.value)} aria-label="Default select example">
                                <option value="All">All</option>
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                            </Form.Select>
                            <InputGroup
                                style={{
                                    backgroundColor: '#f2f2f2',
                                    borderRadius: '1rem',
                                    marginLeft: '1rem', minWidth: '100px'
                                }}
                            >
                                <InputGroup.Text
                                    id="basic-addon1"
                                    style={{
                                        backgroundColor: "#f2f2f2",
                                        color: "black",
                                        border: "none",
                                    }}
                                >
                                    {" "}
                                    <i className="bi bi-search"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    style={{ backgroundColor: '#f2f2f2', border: 'none', boxShadow: 'none' }}
                                    className="admin_page_search_bar"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="basic-addon1"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </InputGroup>
                        </div>

                    </div>
                    {filteredArray.map((elem, idx) => (
                        <Col key={idx} md={4} sm={5} lg={2} className="mb-4 me-4" style={{ padding: '0', minWidth: '150px', width: '30%', maxWidth: '350px', height: '140px' }} onClick={() => {
                            setPresentationData(elem)
                            setNewPresentationPage(true)
                        }}>
                            <Card className='card-comp' style={{ cursor: 'pointer' }} onClick={() => {

                            }} >
                                <Card.Body>
                                    <Card.Title style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 3, whiteSpace: 'normal' }}>{elem.title}</Card.Title>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row> :
                    <AddNewPresentation setNewPresentationPage={setNewPresentationPage} presentationData={presentationData} setPresentationData={setPresentationData} />}
            </Container>
        </div>
    )
}