import React from "react";
import './Contacts.css'
export default function Contacts() {
  return (
    <div id="contacts">
      <div className="contactsContainer">
        <h1 className="title">My contacts</h1>
        <div className="social-container">
            <a href="#" className="instagram social-card"><i className="icon fab fa-instagram"></i></a>
            <a href="#" className="youtube social-card"><i className="icon fab fa-youtube"></i></a>
            <a href="#" className="github social-card"><i className="icon fab fa-github"></i></a>
            <a href="#" className="telegram social-card"><i className="icon fab fa-telegram"></i></a>
        </div>
      </div>
    </div>
  );
}
