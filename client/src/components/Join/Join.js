import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";
import rainbaLogo from "../../icons/rainba-logo.png";

const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const colors = ["rgb(197, 16, 16)", "orange", "rgb(248, 232, 87)", "rgb(45, 167, 45)", "rgb(0, 162, 255)", "#7269c3"];
    const secColors =["rgb(253, 229, 229)", "rgb(255, 239, 209)", "rgb(255, 250, 200)", "rgb(222, 246, 222)", "rgb(202, 235, 255)", "#e4e1ff"];
    const terColors =["rgb(130,34,34", "rgb(177, 116, 2)", "rgb(226, 207, 0)", "rgb(7, 100, 7)", "rgb(37, 91, 161)", "#312694"];
    
    const setColorRed = () => {
        document.querySelector(".color-active").classList.remove("color-active");
        document.querySelector(".color-1").classList.add("color-active");
        document.documentElement.style.setProperty('--main-color', colors[0]);
        document.documentElement.style.setProperty('--sec-color', secColors[0]);
        document.documentElement.style.setProperty('--ter-color', terColors[0]);
    };
    const setColorOrange = () => {
        document.querySelector(".color-active").classList.remove("color-active");
        document.querySelector(".color-2").classList.add("color-active");
        document.documentElement.style.setProperty('--main-color', colors[1]);
        document.documentElement.style.setProperty('--sec-color', secColors[1]);
        document.documentElement.style.setProperty('--ter-color', terColors[1]);
    };
    const setColorYellow = () => {
        document.querySelector(".color-active").classList.remove("color-active");
        document.querySelector(".color-3").classList.add("color-active");
        document.documentElement.style.setProperty('--main-color', colors[2]);
        document.documentElement.style.setProperty('--sec-color', secColors[2]);
        document.documentElement.style.setProperty('--ter-color', terColors[2]);
    };
    const setColorGreen = () => {
        document.querySelector(".color-active").classList.remove("color-active");
        document.querySelector(".color-4").classList.add("color-active");
        document.documentElement.style.setProperty('--main-color', colors[3]);
        document.documentElement.style.setProperty('--sec-color', secColors[3]);
        document.documentElement.style.setProperty('--ter-color', terColors[3]);
    };
    const setColorBlue = () => {
        document.querySelector(".color-active").classList.remove("color-active");
        document.querySelector(".color-5").classList.add("color-active");
        document.documentElement.style.setProperty('--main-color', colors[4]);
        document.documentElement.style.setProperty('--sec-color', secColors[4]);
        document.documentElement.style.setProperty('--ter-color', terColors[4]);
    };
    const setColorPurple = () => {
        document.querySelector(".color-active").classList.remove("color-active");
        document.querySelector(".color-6").classList.add("color-active");
        document.documentElement.style.setProperty('--main-color', colors[5]);
        document.documentElement.style.setProperty('--sec-color', secColors[5]);
        document.documentElement.style.setProperty('--ter-color', terColors[5]);
    };

    return (
        <div className="joinInnerContainer">
            <img className="rainbaLogo" src={rainbaLogo} alt="Arc-en-ciel"/>
            <h1 className="heading">Connexion</h1>
            <div>
                <input placeholder="Nom" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <input placeholder="Nom de la discussion" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
            </div>
            <div className="colorPicker">
                <button className="color color-1 color-active" aria-label="rouge" onClick={setColorRed}></button>
                <button className="color color-2" aria-label="orange" onClick={setColorOrange}></button>
                <button className="color color-3" aria-label="jaune" onClick={setColorYellow}></button>
                <button className="color color-4" aria-label="vert" onClick={setColorGreen}></button>
                <button className="color color-5" aria-label="bleu" onClick={setColorBlue}></button>
                <button className="color color-6" aria-label="violet" onClick={setColorPurple}></button>
            </div>
            <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button className="button-join mt-20" type="submit">Se connecter</button>
            </Link>
            </div>
        
    )
};

export default Join;