import React, { useState } from "react";
import '../css/chatbox.css';
import ChatItem from "./chat/ChatItem";

const ChatBox = () => {
    const [inputValue, setInputValue] = useState('');
    const [messageItems, setMessageItems] = useState([]);

    const handleSend = () => {
        setMessageItems([...messageItems, {content: inputValue, IsBot: false}, {content: "哈哈，我还在开发，等待接口接入返回结果把", IsBot: true}]);
        setInputValue('');
        console.log(messageItems)
        console.log(inputValue)
      };

    return (
      <div className="chatbox">
        <ul>
            {ListChatItems(messageItems)}
        </ul>
  
        <input type="text" placeholder="Type message.." value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button onClick={handleSend}>Send</button>
      </div>
    );

    
    function ListChatItems(items) {
        const listItems = [];
        for (let i = 0; i < items.length; i++) {
            listItems.push(<ChatItem content={items[i].content} IsBot={items[i].IsBot} />);
        }
        return listItems
    }
  };
  

  export default ChatBox;