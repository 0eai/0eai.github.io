import React from "react";
import "./SideNavBar.css"
import { Col, Row } from "react-bootstrap";


// const oneComp =(title)=>{
//     return (
//         <Row style={{ margin:'0', marginTop: "10px", }}>
//                 <Col md={9}>
//                     <span style={pageOpen=="Requests"?{fontSize: '20px',color:'#6495ED'}:{fontSize: '20px'}}>{title}</span>
//                 </Col>
//                 <Col md={3} style={{cursor:'pointer'}}>
//                     {pageOpen=='open' ? (
//                         <i
//                             className="bi bi-caret-right-fill"
//                             style={{ color: '#6495ED', fontSize: '20px' }}
//                             // onClick={()=>setPageOpen('')}
//                         ></i>
//                     ) : (
//                         <i
//                             className="bi bi-caret-down-fill"
//                             style={{ color: '#424242', fontSize: '20px' }}
//                             // onClick={()=>setPageOpen('open')}
//                         ></i>
//                     )}</Col>
//             </Row>
//     )
// }

export default function AdminSideNavBar(props) {
    // const [isCaretUp, setIsCaretUp] = useState(true);
    let { pageOpen, setPageOpen } = props

    return (
        <div className="admin-nav-bar-content" style={{ width: '15%', padding: '0', borderRight: '1.5px solid #eee', minWidth: '140px', maxWidth: '230px' }}>
            <Row style={{ margin: '0', marginTop: "10px", cursor: 'pointer' }} onClick={() => {
                if (!pageOpen || pageOpen !== "editBio") setPageOpen('editBio')
            }}>
                <Col md={9} sm={9} xs={9}>
                    <span style={pageOpen === "editBio" ? { fontSize: '20px', color: '#6495ED' } : { fontSize: '20px' }}>Home</span>
                </Col>
                <Col md={3} sm={3} xs={3} style={{ cursor: 'pointer' }}>
                    {pageOpen === 'editBio' ? (
                        <i
                            className="bi bi-caret-right-fill"
                            style={{ color: '#6495ED', fontSize: '20px' }}

                        ></i>
                    ) : (
                        <i
                            className="bi bi-caret-down-fill"
                            style={{ color: '#424242', fontSize: '20px' }}

                        ></i>
                    )}</Col>
            </Row>
            <Row style={{ margin: '0', marginTop: "30px", cursor: 'pointer' }} onClick={() => {
                if (!pageOpen || pageOpen !== "papers") setPageOpen('papers')
            }}>
                <Col md={9} sm={9} xs={9}>
                    <span style={pageOpen === "papers" ? { fontSize: '20px', color: '#6495ED' } : { fontSize: '20px' }}>Papers</span>
                </Col>
                <Col md={3} sm={3} xs={3} style={{ cursor: 'pointer' }}>
                    {pageOpen === 'papers' ? (
                        <i
                            className="bi bi-caret-right-fill"
                            style={{ color: '#6495ED', fontSize: '20px' }}

                        ></i>
                    ) : (
                        <i
                            className="bi bi-caret-down-fill"
                            style={{ color: '#424242', fontSize: '20px' }}

                        ></i>
                    )}</Col>
            </Row>
            <Row style={{ margin: '0', marginTop: "30px", cursor: 'pointer' }} onClick={() => {
                if (!pageOpen || pageOpen !== "presentation") setPageOpen('presentation')
            }}>
                <Col md={9} sm={9} xs={9}>
                    <span style={pageOpen === "presentation" ? { fontSize: '20px', color: '#6495ED' } : { fontSize: '20px' }}>Presentation</span>
                </Col>
                <Col md={3} sm={3} xs={3} style={{ cursor: 'pointer' }}>
                    {pageOpen === 'presentation' ? (
                        <i
                            className="bi bi-caret-right-fill"
                            style={{ color: '#6495ED', fontSize: '20px' }}
                        // onClick={() => setPageOpen('')}
                        ></i>
                    ) : (
                        <i
                            className="bi bi-caret-down-fill"
                            style={{ color: '#424242', fontSize: '20px' }}
                        // onClick={() => setPageOpen('Clients')}
                        ></i>
                    )}</Col>
            </Row>
            <Row style={{ margin: '0', marginTop: "30px", cursor: 'pointer' }} onClick={() => {
                if (!pageOpen || pageOpen !== "Workers") setPageOpen('Workers')
            }}>
                <Col md={9} sm={9} xs={9}>
                    <span style={pageOpen === "Workers" ? { fontSize: '20px', color: '#6495ED' } : { fontSize: '20px' }}>...</span>
                </Col>
                <Col md={3} sm={3} xs={3} style={{ cursor: 'pointer' }}>
                    {pageOpen === 'Workers' ? (
                        <i
                            className="bi bi-caret-right-fill"
                            style={{ color: '#6495ED', fontSize: '20px' }}
                        // onClick={() => setPageOpen('')}
                        ></i>
                    ) : (
                        <i
                            className="bi bi-caret-down-fill"
                            style={{ color: '#424242', fontSize: '20px' }}
                        // onClick={() => setPageOpen('Workers')}
                        ></i>
                    )}</Col>
            </Row>

        </div>

    )
}

