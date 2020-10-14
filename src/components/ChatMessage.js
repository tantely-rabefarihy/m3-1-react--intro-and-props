import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  if (props.messageType === "sent") {
    return (
      <div className="received-container">
        <div className="chat-text-container">
          <p className="text-message received">{props.message.body}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="chat-message">
        <div>
          <img src={props.message.user.avatar} alt=""></img>
        </div>
        <div className="chat-text-container">
          <p className="user-name">{props.message.user.username}</p>
          <p className="text-message">{props.message.body}</p>
        </div>
      </div>
    );
  }
};

export default ChatMessage;
