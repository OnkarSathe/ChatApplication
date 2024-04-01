import React from "react";
import "./myStyles.css";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { IconButton } from "@mui/material";

export function SideBar() {
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
      <div className="sb-search">search</div>
      <div className="sb-conversations">conversations</div>
    </div>
  );
}
