import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PresentationsPage.css"
import { useFirebase } from "../../firebase/userContext";

export default function PresentationsPage(props) {

    const { uid } = props

    const [presentationData, setPresentationData] = useState([]);

    let firebase = useFirebase();

    useEffect(() => {
        firebase.getPresentations(uid, (data) => {
            let arr = []
            for (let uid in data) {
                arr.push(data[uid])
            }
            setPresentationData([...arr])
        })
    }, [])


    return (
        <Row className="presentation-page-content" >
            {presentationData.map((elem, idx) => {
                return (
                    <div key={idx} className="details">
                        <span id="topic-name" className="">{elem.title}</span>
                        <span id="place" className="">{elem.presentedOn} </span>
                        <span id="links" className="">
                            {elem.presentationSlidesLink && <a href={elem.presentationSlidesLink} target="_blank"
                                rel="noopener">[Slides]</a>}
                            {elem.presentationVideoLink && <a href={elem.presentationVideoLink} target="_blank"
                                rel="noopener">[Video]</a>}
                        </span>
                    </div>
                )
            })}

        </Row>
    )
}