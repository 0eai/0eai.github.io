import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { Col, Container, Row, Form, InputGroup, Button } from "react-bootstrap";
import "./PapersPage.css"
import AddNewPapers from "../AddNewPapers/AddNewPapers";

export default function AddPapersPage(props) {
    // let { setOpenProjectsPage, setProjectData } = props
    let [papersData, setPapersData] = useState([])
    // const firebase = useFirebase();
    const [statusValue, setStatusValue] = useState("")
    const [searchQuery, setSearchQuery] = useState("");
    const [newPapersPage,setNewPapersPage] = useState("")

    const data = [
        { title: 'Federated Optimization in Heterogeneous Networks' },
        { title: 'Analysis of User Interaction to Mental Health Application Using Topic Modeling Approach' },
        { title: 'Privacy-Preserving Digital Intervention for Mental Health Using Federated Learning' },
        { title: 'Privacy-Preserving Digital Intervention for Mental Health Using Federated Learning Analysis of User Interaction to Mental Health Application Using Topic Modeling Approach' }

    ]

    const filteredArray = data.filter((elem) => {
        const { title } = elem;
        const lowerCaseQuery = searchQuery.toLowerCase();
        return (
            (title && title.toLowerCase().includes(lowerCaseQuery))
        );
    });
  

    useEffect(() => {
        // firebase.getAllProjects((requests) => {
        //     let data = []
        //     for (let userId in requests) {
        //         for (let project in requests[userId]) {
        //             if(!requests[userId][project].publish_devices) data.push({ ...requests[userId][project], userId, projectId: project,publish_devices:[] })
        //             else data.push({ ...requests[userId][project], userId, projectId: project })
        //         }
        //     }
        //     setProjectsData([...data])
        // })
    }, [])


    return (
        <div style={{ display: 'flex', height: '100%', flex: '1' }} className="add-paper-page">
            <Container style={{ padding: '0', margin: '0', minWidth: '100%' }}>
                {!newPapersPage ?<Row style={{ width: 'inherit', margin: '0', padding: '3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',paddingLeft:'0',paddingBottom:'3rem' }}>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <h2 style={{ color: '#999999', fontWeight: '600', fontSize: '2.2rem',marginRight:'2rem' }}>Papers</h2>
                            <Button onClick={()=>setNewPapersPage(true)}  className="add-new-btn">
                                <i className="bi bi-plus"></i>
                                <span style={{ margin: '5px' }}>New</span>
                            </Button>
                        </div>

                          <div className="" style={{ display: 'flex', height: '40px' }}>
                            <Form.Select style={{ boxShadow: 'none', backgroundColor: "#f2f2f2", border: 'none',minWidth:'100px' }} onChange={(e) => setStatusValue(e.target.value)} aria-label="Default select example">
                                <option value="All">All</option>
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                            </Form.Select>
                            <InputGroup
                                style={{
                                    backgroundColor: '#f2f2f2',
                                    borderRadius: '1rem',
                                    marginLeft: '1rem',minWidth:'100px'
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
                                    // style={{color:"white",fontSize:"27px",border:"none",outline:"none",boxShadow:"none"}}
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
                        <Col key={idx} md={4} sm={5} lg={2} className="mb-4 me-4" style={{ padding: '0', minWidth: '150px', width: '30%', maxWidth: '350px', height: '140px' }} onClick={()=>{
                            setPapersData(elem)
                            setNewPapersPage(true)
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
                <AddNewPapers setNewPapersPage={setNewPapersPage} papersData={papersData} setPapersData={setPapersData} />}
            </Container>
        </div>
    )
}