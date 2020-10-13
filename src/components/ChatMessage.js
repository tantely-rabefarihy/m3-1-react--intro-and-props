import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  console.log("NEW LOG", props);
  if (props.messageType === "sent") {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
};

const SentMessage = (props) => {
  return (
    <div className="chat-message">
      <div className="myuserSection">
        <div className="myuserInfo">
          <p className="mymessageBody">{props.message.body}</p>
        </div>
      </div>
    </div>
  );
};

const ReceivedMessage = (props) => {
  console.log("received message", props);
  return (
    <div className="chat-message">
      <div className="userSection">
        <div className="userPic">
          <img className="avatar" src={props.message.user.avatar}></img>
        </div>
        <div className="userInfo">
          <span className="username">{props.message.user.username}</span>
          <p className="messageBody">{props.message.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
