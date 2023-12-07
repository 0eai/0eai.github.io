import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PapersPage.css"
export default function PapersPage(props) {
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
            <Row className="papers-page-content" >
                {data.map((elem) => {
                    return (
                        <div className="details">
                            <span id="topic-name" >{elem.topicName}</span>
                            <span id="authors" >{elem.authors}</span>
                            <span id="place" >{elem.place} </span>
                            <span id="links" >
                                <span>[Paper]</span>
                                <span>[Arxiv]</span>
                                <span>[Code]</span>
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