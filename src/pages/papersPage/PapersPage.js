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
            //    for(let paperId in data[uid]){
                arr.push(data[uid])
            //    }
            }
            setpapersData([...arr])
            // console.log(arr)
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
                            <a href={elem.paperLink}>[Paper]</a>
                            <a href={elem.arvixLink}>[Arxiv]</a>
                            <a href={elem.sourceCodeLink}>[Code]</a>
                            <a href={elem.presentationSlidesLink}>[Slides]</a>
                            <a href={elem.presentationVideoLink}>[Video]</a>
                        </span>
                    </div>
                )
            })}

        </Row>
        // </Container>
    )
}