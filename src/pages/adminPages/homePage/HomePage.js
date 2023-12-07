import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AdminSideNavBar from "../../../components/sideNavBar/SideNavBar";
import Navbar from "../../../components/navBar/NavBar";
import EditBioPage from "../editBioPage/EditBioPage";
import AddPresentationPage from "../presentationPage/PresentationPage";
import AddPapersPage from "../papersPage/PapersPage";

const AdminHomePage = () => {
    let navigate = useNavigate();
    const [requestPage, setRequestPage] = useState("open");
    const [adminPage, setAdminPage] = useState("");
    const [pageOpen, setPageOpen] = useState("Requests");
    const [openProjectsPage, setOpenProjectsPage] = useState(false)
    const [projectData, setProjectData] = useState({})

    //   useEffect(() => {
    //     const checkIfAdmin = async () => {
    //       await firebase.getUserDataUsingPath(
    //         localStorage.getItem("uid"),
    //         (data) => {
    //           if (data.user_type.toLowerCase() === "admin") {
    //             setAdminPage("show");
    //           } else setAdminPage("hide");
    //         }
    //       );
    //     };
    //     if (localStorage.length) checkIfAdmin();
    //   });

    //   useEffect(() => {
    //     if (!localStorage.getItem("uid")) {
    //       signOut(firebaseAuth);
    //       navigate("/");
    //     }
    //   });

    return (
        <div style={{ height: "100vh" }}>
            <Navbar />
            <div style={{ display: "flex", height: "auto" }}>
                <AdminSideNavBar pageOpen={pageOpen} setPageOpen={setPageOpen} />
                {pageOpen === "editBio" ?
                <EditBioPage />:
                pageOpen === "papers" ?
                <AddPapersPage /> :
                pageOpen === "presentation" ?
                <AddPresentationPage/> :
                "" 
            }
            </div>
        </div>
    );
};

export default AdminHomePage;
