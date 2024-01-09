import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PapersPage.css"
import { useFirebase } from "../../firebase/userContext";
export default function PapersPage(props) {
    const { uid } = props

    const [papersData, setpapersData] = useState([])
    let firebase = useFirebase()

    useEffect(() => {
        firebase.getPapers(uid, (data) => {
            let arr = []
            for (let uid in data) {
                arr.push(data[uid])
            }
            setpapersData([...arr])
        })
    }, [])


    return (

        // <Container>
        <Row className="papers-page-content" >
            {papersData.map((elem, idx) => {
                return (
                    <div key={idx} className="details">
                        <span id="topic-name" >{elem.title}</span>
                        <span id="authors" >{elem.authors}</span>
                        <span id="place" >{elem.publishedOn} </span>
                        <span id="links" >
                            {elem.paperLink && <a className="mb-3" href={elem.paperLink} target="_blank"
                                rel="noopener">[Paper]</a>}
                            {elem.arvixLink && <a className="mb-3" href={elem.arvixLink} target="_blank"
                                rel="noopener">&#91;Arxiv&#93;</a>}
                            {elem.sourceCodeLink && <a className="mb-3" href={elem.sourceCodeLink} target="_blank"
                                rel="noopener">[Code]</a>}
                            {elem.presentationSlidesLink && <a className="presentation-slides-link mb-3" href={elem.presentationSlidesLink} target="_blank"
                                rel="noopener">[Slides]</a>}
                            {elem.presentationVideoLink && <a className="presentation-video-link mb-3" href={elem.presentationVideoLink} target="_blank"
                                rel="noopener">[Video]</a>}
                        </span>
                    </div>
                )
            })}

        </Row>
        // </Container>
    )
}