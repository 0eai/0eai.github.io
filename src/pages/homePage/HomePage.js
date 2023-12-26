import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./HomePage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PapersPage from "../papersPage/PapersPage";
import PresentationsPage from "../presentationsPage/PresentationsPage";
import { useFirebase } from "../../firebase/userContext"
import UidInputDialog from "../../components/dialogBox/DialogBox";
// const uid = '2Z7MSJW8leV0yNclhOCIvGtR1c62'
const uid = 'jnEFgvdCcgd0CPBsv2RSL6wjd4p1'

export default function HomePage() {
    const [pageOpen, setPageOpen] = useState("");
    const [showDialogBox, setShowDialogBox] = useState(true)
    const [userData, setuserData] = useState({})
    // const [uid, setUid] = useState("")
    let firebase = useFirebase()

    useEffect(() => {
        if (uid) {
            firebase.getUsersBio(uid, (data) => {
                if (data) {
                    setuserData(data)
                    console.log((data))
                }
            })
        }
    }, [])
    return (
        <>
            <div className="home-page-content">
                <Container
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "auto",
                    }}
                >
                    <Header setPageOpen={setPageOpen} pageOpen={pageOpen} />
                    <div className="wrapper">
                        {!pageOpen ? (
                            <Row className="card-content">
                                <Col md={6} lg={6} sm={12} className="profile-image">
                                    <img className="card_Avatar" src={userData.profile_picture}></img>
                                    <span className="partition-dash"></span>
                                </Col>
                                <Col md={6} lg={6} sm={12} className="personal-content">
                                    <div id="personal-info">
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                minWidth: "210px",
                                            }}
                                        >
                                            <span className="mb-3" id="college-name">
                                                {userData.name}
                                            </span>
                                            <span className="mb-2" id="post-name">
                                                {userData.position}
                                            </span>
                                            <span className="mb-3" id="location">
                                                <i
                                                    style={{ color: "black" }}
                                                    className="bi bi-geo-alt-fill me-2"
                                                ></i>
                                                {userData.location}
                                            </span>
                                        </div>

                                        <div className="mt-5 mb-3" style={{ textAlign: "center" }}>
                                            <span id="designation" className="">
                                                {userData.description}
                                            </span>
                                        </div>

                                        <div className="mt-5 social-app-icons">
                                            <span>
                                                <a
                                                    href={`mailto:${userData.email}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <i className="bi bi-envelope-fill"></i>
                                                </a>
                                            </span>

                                            <span>
                                                <a
                                                    href={userData.linkedIn}
                                                    target="_blank"
                                                    rel="noopener"
                                                >
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </span>

                                            <span>
                                                <a
                                                    href={userData.github}
                                                    target="_blank"
                                                    rel="noopener"
                                                >
                                                    <i className="fab fa-github"></i>
                                                </a>
                                            </span>

                                            <span>
                                                <a
                                                    href={userData.twitter}
                                                    target="_blank"
                                                    rel="noopener"
                                                >
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        ) : pageOpen === "Papers" ? (
                            <PapersPage uid={uid} />
                        ) : (
                            <PresentationsPage uid={uid} />
                        )}
                    </div>

                </Container>
                <Footer />
            </div>
        </>
    );
}
