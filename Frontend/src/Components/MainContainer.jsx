import React, { useState } from "react";
import "./myStyles.css";
import { SideBar } from "./SideBar";
import { ChatArea } from "./ChatArea";

export function MainContainer() {

    const [conversations, setConversations] = useState([
        {
          name: "Test1",
          lastMessage: "Last Message 1",
          timestamp: "today",
        },
      ])

    return <div className="main-container">
        <SideBar></SideBar>
        <ChatArea props={conversations[0]}></ChatArea>
    </div>
}
