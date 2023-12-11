import React, { useState } from "react";
import "./NavBar.css";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { googleLogout } from '@react-oauth/google';
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../firebase/userContext";


const Navbar = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };
  const navigate = useNavigate();


  const handleClickLogOut = () => {
    signOut(firebaseAuth)
    googleLogout();
    localStorage.clear();
    navigate("/");
  };


  return (
    <>
      <div className="header__container">
        <Row className="responsive nav-bar-row">
          <Col xs sm={6} md={6} style={{ display: "flex", alignItems: 'center', padding: '0' }}>
            <img
              alt="logo"
              style={{ height: '40px', margin: "15px", minWidth: '100px', maxWidth: '150px' }}
              src={"images/logo.png"}
            />
          </Col>
          <Col xs sm={6} md={6} className="align-self-center nav_profile">
            <div className="profile__container">
              <img alt="img" src={`${localStorage.getItem('mySpaceProfileImageUrl')}`} onClick={handleIconClick}
                style={{ width: '40px', minWidth: '30px', height: '40px', cursor: 'pointer' }} className="user__icon" />
              {showDropdown && (
                <Dropdown className="profile-dropdown" show={showDropdown} onToggle={setShowDropdown}>
                  <Dropdown.Menu className="profile__logout">
                    <Dropdown.Item className="profile_link" onClick={handleClickLogOut}>
                      Log Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Navbar;
