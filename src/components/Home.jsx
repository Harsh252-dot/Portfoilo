import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BiDownload } from "react-icons/bi";
import "../styles/home.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import TagCloud from "TagCloud";

const myTags = [
  "JavaScript", "CSS", "HTML", "Redux", "React Router",
  "React", "TypeScript", "GIT", "MongoDB", "Express",
  "NodeJs", "Mongoose", "ChakraUI", "Tailwind", "Babel"
];

export const Home = () => {
  const { light } = useContext(ThemeContext);

  useEffect(() => {
    TagCloud(".content", myTags, {
      radius: 200,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
    });
  }, []);

  const handleDownloadAndOpen = () => {
    const resumePath = "/Harsh-Maharshi-Resume.pdf"; // ✅ updated

    window.open(resumePath, "_blank");

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = resumePath;
      link.setAttribute("download", "/Harsh-Maharshi-Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  return (
    <div id="home" style={{ "--bglight": light ? "#edf2f8" : "#0a192f" }}>
      <div
        id="homecontent"
        style={{
          "--plight": light ? "black" : "white",
          "--namelight": light ? "#dc143c" : "#64ffda",
          "--rolelight": light ? "" : "#dc143c",
        }}
      >
        <p>Hi, I am</p>
        <p>Harsh Maharshi.</p>
        <p>I'm a <span>&nbsp;Software Developer.</span></p>
        <p>
          Passionate about full-stack web development using MongoDB, Express, React, and Node.js.
          I love turning complex ideas into smooth, functional web experiences.
        </p>

        <div className="homeCont">
          <button onClick={handleDownloadAndOpen}>
            Resume <BiDownload />
          </button>

          <div
            className="homeIcCont"
            style={{ "--icColor": light ? "#0a192f" : "#edf2f8" }}
          >
            <div>
              <a href="https://www.linkedin.com/in/harsh-maharshi-756b912a5/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin className="homeIc" />
              </a>
            </div>
            <div>
              <a href="https://github.com/Harsh252-dot" target="_blank" rel="noopener noreferrer">
                <BsGithub className="homeIc" />
              </a>
            </div>
            <div>
              <a href="mailto:harshmaharshi571@gmail.com">
                <SiGmail className="homeIc" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="content" style={{ order: 1, "--color": light ? "#dc143c" : "#64ffda" }}></div>
      </div>
    </div>
  );
};