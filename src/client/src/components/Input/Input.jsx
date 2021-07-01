import React from "react";

import TextField from "@material-ui/core/TextField";
import "./Input.css";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

export const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      <SendIcon />
    </button>
  </form>
);
