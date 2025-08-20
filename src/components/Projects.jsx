import { useContext } from "react";
import "../styles/projects.css";
import { ThemeContext } from "../context/ThemeContext";
import { GoProject } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import {
  SiChakraui,
  SiNodedotjs,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiHeroku,
  SiRedux,
  SiVercel,
  SiExpress,
  SiMongodb,
  SiGit,
  SiNetlify,
} from "react-icons/si";
import blueMercury from "../assets/os.png";
import edusityImg from "../assets/Nykaa.png";


export const Projects = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="projects"
      style={{
        "--bglightproject": light ? "#edf2f8" : "#0a192f",
        "--plight": light ? "black" : "white",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "white" : "#152235",
      }}
    >
      <p>
        Featured <span>Projects </span>{" "}
        <span>
          <GoProject />
        </span>
      </p>
      {/* Blue Mercury */}
      <div className="projectCard">
        <div className="prCardImg">
          <img src={blueMercury} />
        </div>
        <div className="prCardContent">
          <p>OS Simulation: Experience different Operating Systems on Web.</p>
          <p>
            It lets users choose between three major OS's Ubuntu, macOS, and Windows. They can select an OS using GUI (buttons) or type a command in a terminal-like interface. It's a simple demo of OS selection.
          </p>
          <p style={{color:"#60c9ca"}}>
            <span style={{color:"red"}}>Tech Stack: </span>HTML,CSS, JS 
          </p>

          <div className="prCardTs">
            <SiReact style={{ color: "#53c1de" }} className="tsIc" />
            <SiChakraui
              style={{
                color: "#60c9ca",
                background: "white",
                borderRadius: "50%",
              }}
              className="tsIc"
            />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiReactrouter style={{ color: "tomato" }} className="tsIc" />
            <SiRedux style={{ color: "purple" }} className="tsIc" />
            <SiNodedotjs style={{ color: "green" }} className="tsIc" />
            <SiExpress style={{ color: "black" }} className="tsIc" />
            <SiMongodb style={{ color: "green" }} className="tsIc" />
          </div>
          <div style={{ "--icBg": light ? "transparent" : "#0a192f" }}>
            <a
              style={{ textDecoration: "none" }}
              href="https://crypto-crusaders.vercel.app/"
              target="_blank"
            >
              <button>
                <FaEye className="tsBIc" /> Go live
              </button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/kuldeeepy/Crypto-Crusaders_011"
              target="_blank"
            >
              <button>
                {" "}
                <SiGithub className="tsBIc" /> View code
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Edusity */}
      <div className="projectCard">
        <div className="prCardImg">
          <img src={edusityImg} alt="Edusity Project Screenshot" />
        </div>
        <div className="prCardContent">
          <p>Nykaa Clone </p>
          <p>
            The Nykaa clone project serves as a comprehensive platform for learning, prototyping, and demonstrating technical skills. It provides practical experience in web development, UI/UX design, database management, and web security. Developers can use it to build portfolios, practice full-stack development, and test new e-commerce features. The project is valuable for educational workshops, team collaboration exercises, and business prototyping. It also supports open-source contributions, user behavior analysis, and integration with machine learning for personalized recommendations. Overall, the clone offers a versatile environment for developers to enhance their skills and experiment with innovative ideas.
          </p>
          <p style={{color:"#60c9ca"}}>
            <span style={{color:"red"}}>Tech Stack: </span>React.js, Tailwind CSS, React Router
          </p>

          <div className="prCardTs">
            <SiHtml5 style={{ color: "#ef662a" }} className="tsIc" />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiJavascript
              style={{ color: "#f7df1e", background: "black" }}
              className="tsIc"
            />
          </div>
          <div style={{ "--icBg": light ? "transparent" : "#0a192f" }}>
            <a
              style={{ textDecoration: "none" }}
              href="https://cybespace-crusaders-011.vercel.app/"
              target="_blank"
            >
              <button>
                <FaEye className="tsBIc" /> Go live
              </button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/Rushi162003/Cybespace_Crusaders_011"
              target="_blank"
            >
              <button>
                {" "}
                <SiGithub className="tsBIc" /> View code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
