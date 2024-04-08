import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from "@mui/material";

export function ChatArea({props}) {
  return <div className="chatArea-container">
    <div className="chatArea-header">
      <p className="con-icon">{props.name[0]}</p>
      <div className="header-text">
        <p className="con-title">{props.name}</p>
        <p className="con-timeStamp">{props.timestamp}</p>
      </div>
      <IconButton>
        <DeleteIcon></DeleteIcon>
      </IconButton>
    </div>
    <div className="messages-container">messages-container</div>
    <div className="text-input-area">text-input-area</div>
  </div>;
}
