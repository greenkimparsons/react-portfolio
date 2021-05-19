import React from "react";
import AppPic from "./portfolio-images/beautytales_app.png";

const UXUI = () => (
  <div className="page-container" id="uxui">
      <div className="row">
        <div className="col-9 block mx-auto">
          <h3 className="text-center">Introducing Beauty Tales</h3>
          <p className="text-center">To offer an all-in-1 Beauty App</p>
          <span className="img-container">
            <img
              src={AppPic}
              className="img-fluid mx-auto d-block"
              alt="app"
            />
          </span>
          <p>
            With a high demand and investment in the Beauty industry, there is
            not a single app yet that does what Beauty Tales would do. <br />
            Through Beauty Tales, an user can watch, share, and get personal
            beauty advice and stories while being able to purchase those
            products all in one app. With this advantage, I hoped to connect
            users that shared the similar interest of beauty to be able to stay
            connected and seek beauty advice in real-time. <br />
            Beauty Tales would do the following:
          </p>
          <ul>
            <li>Watch favorite beauty Youtubers</li>
            <li>Shop the items used in tutorials directly</li>
            <li>Review the beauty products</li>
            <li>Ask for beauty advice to beauty gurus</li>
            <li>Share stories</li>
            <li>Store beauty products in a digital pouch</li>
          </ul>
        </div>
      </div>
    </div>
);

export default UXUI;
