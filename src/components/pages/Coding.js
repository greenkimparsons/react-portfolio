import React from "react";
import Project1 from "./portfolio-images/weather-dash.png";
import Project2 from "./portfolio-images/snoopie.png";

const Coding = () => (
  <div className="page-container" id="coding">
    <section class="container my-5">
      <div class="row">
        <div class="col-9 col-md-8 col-xl-9">
          <h3>Projects from GA Tech Bootcamp</h3>
          <p>Ending the bootcamp in June!</p>
        </div>
        <aside class="col-3 col-md-4 col-xl-3 float-right">
          <h3>Able to Code In</h3>
          <code>HTML/CSS</code>
          <code>JavaScript</code>
          <code>MongoDB</code>
          <code>Express</code>
          <code>React</code>
          <code>Node.js</code>
        </aside>
      </div>
    </section>
    <section class="container my-5">
      <div class="row">
        <div class="col-6">
          <h3>
            Weather Dashboard
            <div class="icon">
              <a href="https://github.com/greenkimparsons/weather-dashboard">
                <g class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </g>
              </a>
            </div>
          </h3>
          <p>
            This was our fifth homework assignment in which we used momentjs, a
            weather API, and having local storage.
          </p>
          <span class="img-container">
            <img
              src={Project1}
              class="img-fluid float-left"
              alt="weather-dash"
            />
          </span>
        </div>
        <div class="col-6">
          <h3>
            Project 1
            <div class="icon">
              <a href="https://github.com/Sttorek/snoopie">
                <g class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </g>
              </a>
            </div>
          </h3>
          <p>
            Snoopie was an app built by a group of 5 at the Bootcamp. Snoopie
            helps find a dog that best matches one's lifestyle through a
            lifestyle quiz.
          </p>
          <span class="img-container">
            <img src={Project2} class="img-fluid float-left" alt="snoopie" />
          </span>
        </div>
      </div>
    </section>
  </div>
);

export default Coding;
