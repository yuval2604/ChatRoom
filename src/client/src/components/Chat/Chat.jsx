import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import Container from "@material-ui/core/Container";
import Info from "../Info/info";
import { Messages } from "../Messages/Messages";

import { makeStyles } from "@material-ui/core/styles";
import { Input } from "../Input/Input";


const useStyles = makeStyles((theme) => ({
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#495867",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "#FFFFFF",
    borderRadius: "8px",
    height: "60%",
    width: "35%",
  },
}));

export const Chat = ({ location }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socketInterval = useState(null);

  const [response, setResponse] = useState("");
  const ENDPOINT = "http://127.0.0.1:4001";
  useEffect(() => {
    // const socket = io({
    //   path: ENDPOINT,
    //   serveClient: false
    // })
    let socket = io(ENDPOINT, {

      withCredentials: false
    });
    socket.on("join", (m) => {
      console.log("hello somebiody " + m);
    })
    socket.emit("chat message", () => {
      console.log("join")
    });

  }, []);

  //this useEffect is for handeling messages and only runs when messages array changes
  // useEffect(() => {
  //   console.log("2");
  //   socket.on("message", (message) => {
  //     setMessages((messages) => [...messages, message]); //add new messages to our messages array the ... copies the old messages and all we do is append the new
  //   });

  //   socket.on("roomData", ({ users }) => {
  //     setUsers(users);
  //   });
  // }, []);

  //functioning for sending messages (its a functional component hence why its a function)
  const sendMessage = (event) => {
    console.log("pressed");
    event.preventDefault(); // full browser refreshes aren't good

    // if (message) {
    //   socket.emit("sendMessage", message, () => setMessage("")); //on the callback from index.js our input field clears
    // }
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Info name={name} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};
