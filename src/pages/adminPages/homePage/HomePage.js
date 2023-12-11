import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AdminSideNavBar from "../../../components/sideNavBar/SideNavBar";
import Navbar from "../../../components/navBar/NavBar";
import EditBioPage from "../editBioPage/EditBioPage";
import AddPresentationPage from "../presentationPage/PresentationPage";
import AddPapersPage from "../papersPage/PapersPage";
import { firebaseAuth, useFirebase } from "../../../firebase/userContext";

const AdminHomePage = () => {
  let navigate = useNavigate();
  let firebase = useFirebase();

  const [pageOpen, setPageOpen] = useState("editBio");

  useEffect(() => {
    if (!localStorage.getItem("mySpaceUid") || !firebase.user) {
      if (firebase.user) signOut(firebaseAuth);
      navigate("/");
    }
  }, []);

  return (
    <div className="admin-home-page" style={{ height: "100vh" }}>
      <Navbar />
      <div style={{ display: "flex", height: "auto",marginTop:'70px' }}>
        <AdminSideNavBar pageOpen={pageOpen} setPageOpen={setPageOpen} />
        {pageOpen === "editBio" ?
          <EditBioPage setPageOpen={setPageOpen} /> :
          pageOpen === "papers" ?
            <AddPapersPage /> :
            pageOpen === "presentation" ?
              <AddPresentationPage /> :
              ""
        }
      </div>
    </div>
  );
};

export default AdminHomePage;
