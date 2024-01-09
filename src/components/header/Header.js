import React, { useState } from "react";
import "./Header.css"
import { useNavigate } from "react-router-dom";
export default function Header(props) {
    let navigate = useNavigate()
    const { pageOpen, setPageOpen,mobileView } = props

    return (
        <>
            <div className={mobileView ? "header-content-mobile-view" : "header-content"}>
                <div className="me-5" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={() => {
                    setPageOpen("")
                }}>
                    <span style={pageOpen === "" ? { color: '#434343' } : { color: '#589cf7' }} >
                        {/* <a href="/view#papers">
                            Home
                            </a> */}
                            Home
                            </span>
                    {pageOpen === "" ? <span className="dash" /> : ""}
                </div>

                <div className="me-5" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={() => {
                    setPageOpen("Papers")
                }}>
                    <span style={pageOpen === "Papers" ? { color: '#434343' } : { color: '#589cf7' }} >Papers</span>
                    {pageOpen === "Papers" ? <span className="dash" /> : ""}
                </div>
                <div className="" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={() => {
                    setPageOpen("Presentation")
                }}>
                    <span style={pageOpen === "Presentation" ? { color: '#434343' } : { color: '#589cf7' }} >Presentations</span>
                    {pageOpen === "Presentation" ? <span className="dash" /> : ""}
                </div>
            </div>
        </>
    )
}