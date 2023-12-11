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
                // for(let presentationId in data[uid]){
                 arr.push(data[uid])
                // }
             }
            setPresentationData([...arr])
        })
    }, [])

    let data = [
        {
            topicName: "Federated Optimization in Heterogenous Networks",
            authors: "Tian Li, Anit Kumar Sahu, Manzil Zaheer, Virginia Smith",
            place: "MLSys 2020",
            links: {
                paper: 'url',
                Arxiv: 'url',
                Code: 'url',
                Slides: 'url',
                Video: 'url'
            }
        },
        {
            topicName: "Federated Optimization in Heterogenous Networks",
            authors: "Tian Li, Anit Kumar Sahu, Manzil Zaheer, Virginia Smith",
            place: "MLSys 2020",
            links: {
                paper: 'url',
                Arxiv: 'url',
                Code: 'url',
                Slides: 'url',
                Video: 'url'
            }
        },
        {
            topicName: "Federated Optimization in Heterogenous Networks",
            authors: "Tian Li, Anit Kumar Sahu, Manzil Zaheer, Virginia Smith",
            place: "MLSys 2020",
            links: {
                paper: 'url',
                Arxiv: 'url',
                Code: 'url',
                Slides: 'url',
                Video: 'url'
            }
        },
        {
            topicName: "Federated Optimization in Heterogenous Networks",
            authors: "Tian Li, Anit Kumar Sahu, Manzil Zaheer, Virginia Smith",
            place: "MLSys 2020",
            links: {
                paper: 'url',
                Arxiv: 'url',
                Code: 'url',
                Slides: 'url',
                Video: 'url'
            }
        },
    ]

    return (
        <Row className="presentation-page-content" >
            {presentationData.map((elem, idx) => {
                return (
                    <div key={idx} className="details">
                        <span id="topic-name" className="">{elem.title}</span>
                        <span id="place" className="">{elem.presentedOn} </span>
                        <span id="links" className="">
                            <a href={elem.presentationSlidesLink}>[Slides]</a>
                            <a href={elem.presentationVideoLink}>[Video]</a>
                        </span>
                    </div>
                )
            })}

        </Row>
    )
}