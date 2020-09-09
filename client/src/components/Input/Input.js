import React from "react";
import "./Input.css";

const Input = ({message, setMessage, sendMessage}) => (
    <form className="form">
        <textarea 
         className="textarea" 
         type="text" 
         placeholder="Écrivez votre message ici" 
         value={message} 
         onChange={(event) => setMessage(event.target.value)} 
         onKeyPress={event => event.key === "Enter" ? sendMessage(event) : null} 
        />
        <button className="sendButton" onClick={(event) => sendMessage(event)}><i class="far fa-paper-plane" aria-label="envoyer message"></i></button>
    </form>
);

export default Input;