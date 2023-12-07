import React, { useState } from "react";
import "./Header.css"
export default function Header(props) {
    const {pageOpen,setPageOpen}=props

    return (
        <>
            <div className="header-content">
                <div className="me-5" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={()=>setPageOpen("")}>
                    <span style={pageOpen === "" ? {color:'#434343'}:{color:'#589cf7'}} >Home</span>
                    {pageOpen === ""?<span className="dash" />:""}
                </div>

                <div className="me-5" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={()=>setPageOpen("Papers")}>
                    <span style={pageOpen === "Papers" ? {color:'#434343'}:{color:'#589cf7'}} >Papers</span>
                    {pageOpen === "Papers"?<span className="dash" />:""}
                </div>
                <div className="me-5" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={()=>setPageOpen("Presentation")}>
                    <span style={pageOpen === "Presentation" ? {color:'#434343'}:{color:'#589cf7'}} >Presentations</span>
                    {pageOpen === "Presentation"?<span className="dash" />:""}
                </div>
            </div>
        </>
    )
}