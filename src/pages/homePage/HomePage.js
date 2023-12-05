import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap"
import "./HomePage.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PapersPage from "../papersPage/PapersPage";
import PresentationsPage from "../presentationsPage/PresentationsPage";
export default function HomePage() {

    const [pageOpen, setPageOpen] = useState("")
    return (
        <>
            <div className="home-page-content" >
                <Container style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto' }} >
                    <Header setPageOpen={setPageOpen} pageOpen={pageOpen} />
                    {!pageOpen ?
                        <Row className="card-content">
                            <Col md={6} lg={6} sm={12} className="profile-image" >
                                <img className="card_Avatar" src="./images/chibi.jpeg"></img>
                                <span className="partition-dash"></span>
                            </Col>
                            <Col md={6} lg={6} sm={12}>
                                <div id='personal-info'>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '210px' }}>
                                        <span className="mb-3" id="college-name">Bong Jun Choi</span>
                                        <span className="mb-3" id="post-name">Associate Professor</span>
                                        <span className="mb-3" id='location'>
                                            <i style={{ color: 'black' }} className="bi bi-geo-alt-fill me-4"></i>
                                            Seoul, Korea
                                        </span>
                                    </div>

                                    <div className="mt-5 mb-3" style={{ textAlign: 'center' }}>
                                        <span id='designation' className=""> Associate Professor @ Seoul National University</span>
                                    </div>


                                    <div className="mt-5 social-app-icons" >
                                        <span>
                                            <a href="https://www.linkedin.com/in/0eai/" target="_blank" rel="noopener">
                                                <i class="fab fa-linkedin-in"></i>
                                            </a>
                                        </span>

                                        <span>

                                            <a href="https://github.com/0eai" target="_blank" rel="noopener">
                                                <i class="fab fa-github"></i>
                                            </a>
                                        </span>
                                        <span>
                                            <a href="https://twitter.com/aksbihta" target="_blank" rel="noopener">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </span>
                                        <span>
                                            <a href="mailto:aks<dot>bihta@gmail.com" target="_blank" rel="noopener">
                                                <i class="bi bi-envelope-fill"></i>
                                            </a>
                                        </span>
                                        <span>
                                            <a
                                                href="https://docs.google.com/presentation/d/e/2PACX-1vQOSQUVZhlDLQHaAK_zlTsg-lv-jCu-UaKz1NX09Iz6Jb5dmrMWTRg5TMIchYyWsK-AkxuAJP5E7a0J/pub?start=false&loop=false&delayms=3000"
                                                target="_blank" rel="noopener">
                                                <i class="fa fa-file"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </Col>
                        </Row> : pageOpen === 'Papers' ?
                            <PapersPage /> : <PresentationsPage />}

                </Container>
                <Footer />
            </div>

        </>

    )
}