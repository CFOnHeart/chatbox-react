import React from "react";
import '../../css/chatbox.css';
import userIconImg from "../../images/user.png"
import gptIconImg from "../../images/gpt.png"

// Bot: left
// User: right
// props: IsBot, content
const ChatItem = (props) => { 
    if (props.IsBot) {
      return (
        <div className="bot-message">
          <img src={gptIconImg} alt="Assistant" />
          <strong>Assistant</strong>
          <br />
          <p>{props.content}</p>
        </div>
      );
    }
    else {
      return (
        <div className="user-message">
          <strong>User</strong>
          <img src={userIconImg} alt="User" />
          <br />
          <p>{props.content}</p>
        </div>
      );
    }
  };
  
  export default ChatItem;