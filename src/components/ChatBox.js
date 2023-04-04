import React, {useEffect, useRef, useState} from "react";
import '../css/chatbox.css';
import ChatItem from "./chat/ChatItem";
import {GetResponseOfBot} from "./chat/ChatAPI";

const ChatBox = () => {
    const [inputValue, setInputValue] = useState('');
    const [messageItems, setMessageItems] = useState([]);
    const bottomRef = useRef(null); // for move the scroll panel to the bottom

    useEffect(() => {
      // 👇️ scroll to bottom every time messages change
      bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messageItems]);

    const handleSend = () => {
      setMessageItems([...messageItems, {content: inputValue, IsBot: false}, {content: GetResponseOfBot(inputValue), IsBot: true}]);
      setInputValue('');
    };
    
    // normal methods
    function ListChatItems(items) {
      const listItems = [];
      for (let i = 0; i < items.length; i++) {
          listItems.push(<ChatItem content={items[i].content} IsBot={items[i].IsBot} />);
      }
      return listItems
    }

    return (
      <div className="chatbox">
        <div className="chat-main-panel">
          
            {ListChatItems(messageItems)}
            <div ref={bottomRef} />
        </div>

        <div className="input-panel">
          <input className="input-box" type="text" placeholder="Type message.." value={inputValue} onChange={e => setInputValue(e.target.value)} />
          <button className="input-button" onClick={handleSend}>Send</button>
        </div>
        
      </div>
    );

    
    
  };
  

  export default ChatBox;