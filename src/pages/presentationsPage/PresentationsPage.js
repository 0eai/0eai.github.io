import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PresentationsPage.css"
export default function PresentationsPage(props) {
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
        // <Container>
        <Row className="presentation-page-content" >
            {data.map((elem) => {
                return (
                    <div className="details">
                        <span id="topic-name" className="">{elem.topicName}</span>
                        <span id="place" className="">{elem.place} </span>
                        <span id="links" className="">
                            <span>[Slides]</span>
                            <span>[Video]</span>
                        </span>
                    </div>
                )
            })}

        </Row>
        // </Container>
    )
}