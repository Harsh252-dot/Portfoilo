import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { GoTriangleRight } from "react-icons/go";
import myImg from "../assets/123.jpg";
// import sd from "../assets/sd.png"
import "../styles/about.css";

export const About = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="about"
      style={{
        "--bglightabout": light ? "white" : "#152235",
        "--plight": light ? "black" : "white",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "" : "#dc143c",
      }}
    >
      <p>About </p>
      <div id="aboutcontent">
        <div id="myselfdesc" data-aos="zoom-in">
          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              Hi, I'm <span>Harsh Maharshi</span> from{" "}
              <span>Rajasthan, india</span> — a dedicated Full Stack Developer
              and building efficient, scalable web apps.
            </p>
          </div>

          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              Pursuing <span>Full Stack Web Development course</span> at Masai School — focusing on real-world skills and
              hands-on projects.
            </p>
          </div>

          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              Skilled in <span>MERN stack (MongoDB, Express, React, Node)</span>{" "}
              with strong command of REST APIs, clean code architecture, and
              responsive UI design.
            </p>
          </div>

          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              Passionate about <span>Data Structures & Algorithms</span> and
              constantly improving problem-solving and coding skills through
              practice.
            </p>
          </div>

          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              A quick learner, strong team player, and effective communicator —
              ready to contribute to collaborative, innovative projects.
            </p>
          </div>
        </div>
        <div id="myimg">
          <img src={myImg} alt="Myself" />
        </div>
      </div>
    </div>
  );
};
