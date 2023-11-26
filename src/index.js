import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
function App() {
  const dataOfSkills = [
    { nm: "HTML", clr: "blue" },
    { nm: "CSS", clr: "red" },
    { nm: "Javascript", clr: "yellow" },
    { nm: "PHP", clr: "skyblue" },
    { nm: "Laravel", clr: "darkred" },
    { nm: "Ajax", clr: "blueviolet" },
    { nm: "API", clr: "aquamarine" },
    { nm: "Bootstrap", clr: "burlywood" },
    { nm: "JQuery", clr: "greenyellow" },
    { nm: "UI & UX", clr: "indianred" },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="card main-card col-3">
          <div className="row">
            <MainPhoto img="images/picofme (2).png" />
            <Intro
              lorem="Some quick example text to build on the card title and make up the bulk
        of the card's content. Some quick example text to build on the card
        title and make up the bulk of the card's content. Some quick example
        text to build on the card title and make up the bulk of the card's"
            />
            <Skills skl={dataOfSkills} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MainPhoto(props) {
  return (
    <div className="">
      <img src={props.img} className="card-img-top" />
    </div>
  );
}

function Intro(props) {
  return (
    <div class="card-body">
      <p class="card-text">{props.lorem}</p>
    </div>
  );
}

function Skills(props) {
  console.log(props.skl);
  return (
    <div class="card-footer">
      {props.skl.map((elm) => (
        <span class="badge mx-1" style={{ backgroundColor: elm.clr }}>
          {elm.nm}
        </span>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
