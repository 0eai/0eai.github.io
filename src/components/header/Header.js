import React, { useState } from "react";
import "./Header.css"
export default function Header(props) {
    const {pageOpen,setPageOpen}=props

    return (
        <>
            <div className="header-content">
                <div className="me-5" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={()=>setPageOpen("")}>
                    <span >Home</span>
                    {pageOpen === ""?<span className="dash" />:""}
                </div>

                <div className="me-5" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={()=>setPageOpen("Papers")}>
                    <span >Papers</span>
                    {pageOpen === "Papers"?<span className="dash" />:""}
                </div>
                <div className="me-5" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={()=>setPageOpen("Presentation")}>
                    <span >Presentations</span>
                    {pageOpen === "Presentation"?<span className="dash" />:""}
                </div>
            </div>
        </>
    )
}