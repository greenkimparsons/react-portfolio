import React from "react";

const Contact = () => (
  <div id="contact" class="tabcontent">
    <h3>Contact</h3>
    <p>
      <strong>First</strong> Name: Green <br />
      <strong>Last</strong> Name: Kim
    </p>
    <p>Email: greenkimparsons@gmail.com</p>
    <button
      type="button"
      className="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      View Resume
    </button>
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    ></div>
  </div>
);

export default Contact;
