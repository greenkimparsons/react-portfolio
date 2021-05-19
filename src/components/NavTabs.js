import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#graphicdesign"
          onClick={() => props.handlePageChange("GraphicDesign")}
          className={props.currentPage === "GraphicDesign" ? "nav-link active graphicdesign" : "nav-link"}
        >
          Graphic Design
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#coding"
          onClick={() => props.handlePageChange("Coding")}
          className={props.currentPage === "Coding" ? "nav-link active coding" : "nav-link"}
        >
          Coding
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#UXUI"
          onClick={() => props.handlePageChange("UXUI")}
          className={props.currentPage === "UXUI" ? "nav-link active uxui" : "nav-link"}
        >
          UX/UI
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active contact" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
