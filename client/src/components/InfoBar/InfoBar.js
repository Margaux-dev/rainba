import React from "react";
import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";
import "./InfoBar.css";

const InfoBar = ({room}) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="En ligne"/>
            <p>{room}</p>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="Fermer la discussion"/></a>
        </div>
    </div>
);

export default InfoBar;