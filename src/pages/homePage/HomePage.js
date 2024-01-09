import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./HomePage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PapersPage from "../papersPage/PapersPage";
import PresentationsPage from "../presentationsPage/PresentationsPage";
import { useFirebase } from "../../firebase/userContext"
const uid = '2Z7MSJW8leV0yNclhOCIvGtR1c62'
// const uid = 'jnEFgvdCcgd0CPBsv2RSL6wjd4p1'

export default function HomePage() {
    const [pageOpen, setPageOpen] = useState("");
    const [showDialogBox, setShowDialogBox] = useState(true)
    const [userData, setuserData] = useState({})
    const [mobileView, setMobileView] = useState(false)

    let firebase = useFirebase()

    function debounce(func, delay) {
        let timeoutId;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        };
    }


    const handleResize = debounce(() => {
        if (window.innerHeight > window.innerWidth) {
            setMobileView(true)
        }
        else setMobileView(false)
    }, 200); // Adjust the delay as needed

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    useEffect(() => {
        if (uid) {
            firebase.getUsersBio(uid, (data) => {
                if (data) {
                    setuserData(data)
                }
            })
        }
        if (window.innerHeight > window.innerWidth) {
            setMobileView(true)
        }
    }, [])
    return (
        <>
            <div className={mobileView ? "home-page-content-mobiel-view" : "home-page-content"}>
                <Container
                    className="page-content"

                >
                    <Header setPageOpen={setPageOpen} pageOpen={pageOpen} mobileView={mobileView} />
                    <div className={mobileView ? "wrapper-mobile-view" : "wrapper"}>
                        {!pageOpen ? (
                            <Row className="card-content">
                                <Col md={mobileView ? 12 : 6} lg={mobileView ? 12 : 6} sm={12} className={mobileView ? "profile-image" : "profile-image after"}>
                                    <img className="card_Avatar" style={{ border: 'none', boxShadow: 'none' }} src={userData.profile_picture ? userData.profile_picture : ''}></img>
                                    <span className={mobileView ? "partition-dash" : 'partition-dash-hide'}></span>
                                </Col>
                                <Col md={mobileView ? 12 : 6} lg={mobileView ? 12 : 6} sm={12} className="personal-content">
                                    <div id="personal-info">
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                minWidth: "210px",
                                            }}
                                        >
                                            <span className="" id="college-name" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 1, whiteSpace: 'normal', paddingBottom: '20px' }}>
                                                {userData.name}
                                            </span>
                                            <span className="" id="post-name" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 1, whiteSpace: 'normal', paddingBottom: '20px' }}>
                                                {userData.position}
                                            </span>
                                            <span className="" id="location" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 1, whiteSpace: 'normal' }}>
                                                <i
                                                    style={{ color: "black" }}
                                                    className="bi bi-geo-alt-fill me-2"
                                                ></i>
                                                {userData.location}
                                            </span>
                                        </div>

                                        <div className="mt-5 mb-5" style={{ textAlign: "center" }}>
                                            <span id="designation" className="" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, whiteSpace: 'normal' }}>
                                                {userData.description}
                                            </span>
                                        </div>

                                        <div className="social-app-icons">
                                            <div className="icon mail">
                                                <div className="tooltip">
                                                    Mail
                                                </div>
                                                {userData.email && <span>
                                                    <a
                                                        href={`mailto:${userData.email}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="bi bi-envelope-fill"></i>
                                                    </a>
                                                </span>}
                                            </div>

                                            <div className="icon linkedIn">
                                                <div className="tooltip">
                                                    LinkedIn
                                                </div>

                                                {userData.linkedIn && <span>
                                                    <a
                                                        href={userData.linkedIn}
                                                        target="_blank"
                                                        rel="noopener"
                                                    >
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </span>}
                                            </div>

                                            <div className="icon github">
                                                <div className="tooltip">
                                                    Github
                                                </div>
                                                {userData.github && <span>
                                                    <a
                                                        href={userData.github}
                                                        target="_blank"
                                                        rel="noopener"
                                                    >
                                                        <i className="fab fa-github"></i>
                                                    </a>
                                                </span>}
                                            </div>

                                            <div className="icon google-scholar">
                                                <div className="tooltip">
                                                    GoogleScholar
                                                </div>
                                                {userData.googleScholar && <span>
                                                    <a
                                                        href={userData.googleScholar}
                                                        target="_blank"
                                                        rel="noopener"
                                                    >
                                                        <i className="fa-brands fa-google-scholar"></i>
                                                    </a>
                                                </span>}
                                            </div>
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
                <div style={{ marginTop: 'auto', padding: '25px' }}>
                    <img className="" style={{ height: '55px', border: 'none', boxShadow: 'none' }} src={userData.profile_logo ? userData.profile_logo : ''}></img>
                </div>
                <Footer />
            </div>
        </>
    );
}
