import React, { useState } from "react";
import "./myStyles.css";
import { ConversationItems } from "./ConversationItems";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

export function SideBar() {
  const [conversations, setConversations] = useState([
    {
      name: "Test1",
      lastMessage: "Last Message 1",
      timestamp: "today",
    },
    {
      name: "Test2",
      lastMessage: "Last Message 2",
      timestamp: "today",
    },
    {
      name: "Test3",
      lastMessage: "Last Message 3",
      timestamp: "today",
    },
  ]);

  return (
    <div className="sideBar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon></AccountCircleIcon>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon></PersonAddIcon>
          </IconButton>
          <IconButton>
            <GroupAddIcon></GroupAddIcon>
          </IconButton>
          <IconButton>
            <AddCircleIcon></AddCircleIcon>
          </IconButton>
          <IconButton>
            <NightlightIcon></NightlightIcon>
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon></SearchIcon>
        </IconButton>
        <input placeholder="Search" type="text" className="search-box"></input>
      </div>
      <div className="sb-conversations">
        {conversations.map((conversation, index) => (
          <ConversationItems key={index} props={conversation} />
        ))}
      </div>
    </div>
  );
}
