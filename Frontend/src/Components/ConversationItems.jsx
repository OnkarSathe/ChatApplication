import React from "react";

export function ConversationItems({props}){
    return <div className="conversation-container"> 
        <p className="conversation-icon">{props.name[0]}</p>
        <p className="conversation-title">{props.name}</p>
        <p className="conversation-lastmessage">{props.lastMessage}</p>
        <p className="conversation-timeStamp">{props.timestamp}</p>
    </div>
}
