import { ReactComponent as WorkIcon } from "../assets/html.svg";
import { ReactComponent as SchoolIcon } from "../assets/react.svg";
import { ReactComponent as JavascriptIcon } from "../assets/javascript.svg";
import { ReactComponent as CssIcon } from "../assets/css.svg";
import { ReactComponent as NodeIcon } from "../assets/node.svg";
import { ReactComponent as MongodbIcon } from "../assets/mongodb.svg";
import { ReactComponent as PhpIcon } from "../assets/php.svg";
import { ReactComponent as GitIcon } from "../assets/git.svg";

import './Skills.css';
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Skills = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  let javascriptStyles = { background: "#ffa07a" };
  let cssStyles = { background: "lightblue" };
  let nodeStyle = { background: "white" };
  let mongodbStyle = { background: "white" };
  let phpStyle = { background: "purple" };
  let gitStyle = { background: "black" };

  return (
    <div>
      <div id = "Skills" className="heading">Skills</div>
      <VerticalTimeline > 
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "html";
          let isSchoolIcon = element.icon === "react";
          let isJavascriptIcon = element.icon === "javascript";
          let isCssIcon = element.icon === "css";
          let isNodeIcon = element.icon === "node";
          let isMongodbIcon = element.icon === "mongodb";
          let isPhpIcon = element.icon === "php";
          let isGitIcon = element.icon === "git";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              
              iconStyle={
                isWorkIcon
                  ? workIconStyles
                  : isSchoolIcon
                  ? schoolIconStyles
                  : isJavascriptIcon
                  ? javascriptStyles
                  : isCssIcon
                  ? cssStyles
                  : isNodeIcon
                  ? nodeStyle
                  : isMongodbIcon
                  ? mongodbStyle
                  : isPhpIcon
                  ? phpStyle
                  : isGitIcon
                  ? gitStyle
                  : {} 
              }
              icon={
                isWorkIcon ? (
                  <WorkIcon />
                ) : isSchoolIcon ? (
                  <SchoolIcon />
                ) : isJavascriptIcon ? (
                  <JavascriptIcon />
                ) : isCssIcon ? (
                  <CssIcon />
                ) : isNodeIcon ? (
                  <NodeIcon />
                ) : isMongodbIcon ? (
                  <MongodbIcon />
                ) : isPhpIcon ? (
                  <PhpIcon />
                ) : isGitIcon ? (
                  <GitIcon />
                ) : null
              }
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon
                      ? "workButton"
                      : isSchoolIcon
                      ? "schoolButton"
                      : "anotherButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Skills;
