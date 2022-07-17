import React from "react";
import "./style.css";
import northernPic from "./image/northen-hemisphere.webp";
import southernPic from "./image/southern-hemisphere.jpg";

const hemisphereConfig = {
  Northern: {
    text: "It is northern hemisphere",
    picture: northernPic,
  },
  Southern: {
    text: "It is southern hemisphere",
    picture: southernPic,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere];

  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="hemisphere picture" />
        </div>
        <div className="ui teal bottom attached label">
          <h1>{text}.</h1>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
